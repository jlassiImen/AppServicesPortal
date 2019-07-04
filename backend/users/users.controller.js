const express = require('express');
const config = require('../config.json');
const bcrypt = require('bcrypt');
const db = require('../_helpers/db');
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var moment = require("moment");
const User = db.User;
const Token = db.Token;
const ResetPassword = db.ResetPassword;
var ObjectID = require('mongodb').ObjectID;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.fromEmail,
        pass: config.emailPassword
    }
});
var users = {

    authenticate: function(req, res, next) {
        var email = req.body.email || '';
        var password = req.body.password || '';

        if (email == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }

        User.findOne({
            'email': email
        }, function(err, userFromDB) {
            if (userFromDB) {
                //comaper le mot de passe saisie par l'utilisateur et celle de la base de données
                if (bcrypt.compareSync(password, userFromDB.password)) {
                    res.status(200);
                    res.json({
                        "status": 200,
                        "message": "success"
                    });
                } else {
                    res.json({
                        "status": 401,
                        "message": "Invalid credentials"
                    });
                }

            } else {
                console.log('Result does not exist');
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
            }
        });
    },
    getUser: function(req, res, next) {
        var email = req.params.email;
        User.findOne({
            'email': email
        }, function(err, userFromDB) {
            if (userFromDB) {
                return res.json({
                    "status": 200,
                    "message": userFromDB
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "User does not found!!"
                });
            }
        });
    },

    updatePassword: function(req, res, next) {
        var email = req.body.email || '';
        var newPassword = req.body.newPassword || '';
        var oldPassword = req.body.oldPassword || '';


        if (email == '' || oldPassword == '' || newPassword == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }
        console.log("aaaaaaaaaaaaa");
        User.findOne({
            'email': email
        }, function(err, userFromDB) {
            if (userFromDB) {
                //comaper le mot de passe saisie par l'utilisateur et celle de la base de données
                bcrypt.compare(oldPassword, userFromDB.password, (err, match) => {
                  console.log("rrrrrrrrrrrrrrr" + match);
                  if (match == true) {
                    var cryptPassword = bcrypt.hashSync(newPassword, 5);
                    User.updateOne({
                        '_id': userFromDB._id
                    }, {
                        $set: {
                            'password': cryptPassword
                        }
                      })
                        .then((result) => {
                            if (err) {
                                return res.json({
                                    "status": 500,
                                    "message": "Internal server error"
                                });
                            } else {
                                console.log("zzzzzzzzzzzzzzzzzzzzzzzzz");
                                res.json({
                                    "status": 200,
                                    "message": "success"
                                });
                            }
                        })
                    }

                
             else {
                console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeee");
                res.json({
                    "status": 401,
                    "message": "Invalid oldPassword"
                });
            }

        });

    }
  });
      },


    register: function(req, res, next) {
        var userParam = req.body;
        // vérifier si l'email existe déjà
        User.findOne({
            email: req.body.email
        }, function(err, userResult) {
            // Make sure user doesn't already exist
            if (userResult) {
                return res.json({
                    "status": 409,
                    "message": "email is already taken"
                });
            }
            const user = new User(userParam);
            // crypter le mot de passe
            user.password = bcrypt.hashSync(userParam.password, 5);
            // enregistrer user
            user.save(function(err) {
                if (err) {
                    return res.json({
                        "status": 500,
                        "message": "Internal server error"
                    });
                }
                // Create a verification token for this user
                var token = new Token({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                });

                // Save the verification token
                token.save(function(err) {
                    if (err) {
                        return res.json({
                            "status": 500,
                            "message": "Internal server error"
                        });
                    }
                    // Send the email
                    var mailOptions = {
                        to: user.email,
                        subject: 'Account Verification Token',
                        text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/?tokenId=' + token.token + '&userId=' + user._id + '.\n'
                    };
                    smtpTransport.sendMail(mailOptions, function(err) {
                        if (err) {
                            return res.status(500).send({
                                msg: err.message
                            });
                        }
                        res.status(200);
                        res.json({
                            "status": 200,
                            "message": "success"
                        });
                    });
                });
            });
        });
    },
    confirmation: function(req, res, next) {
        Token.findOne({
            token: req.body.tokenId,
            _userId: req.body.userId
        }, function(err, token) {
            if (!token) {
                return res.json({
                    "status": 404,
                    "message": "Token not found"
                });
            }
            // If we found a token, find a matching user
            User.findOne({
                _id: token._userId
            }, function(err, user) {
                if (!user) {
                    return res.json({
                        "status": 404,
                        "message": "user not found"
                    });
                }
                if (user.isVerified) {
                    return res.json({
                        "status": 400,
                        "message": "User already has been verified"
                    });
                }
                // Verify and save the user
                user.isVerified = true;
                user.save(function(err) {
                    if (err) {
                        return res.status(500).json({
                            "status": 500,
                            "message": err.message
                        });
                    }
                    res.status(200).json({
                        "status": 200,
                        "message": "success"
                    });
                });
            });
        });
    },
    //si le token d'un user a expiré
    resendToken: function(req, res, next) {
        User.findOne({
            email: req.body.email
        }, function(err, user) {
            if (!user) return res.json({
                "status": 400,
                "message": "We were unable to find a user with that email."
            });
            if (user.isVerified) return res.json({
                "status": 400,
                "message": "This account has already been verified. Please log in."
            });
            // Create a verification token, save it, and send email
            var token = new Token({
                _userId: user._id,
                token: crypto.randomBytes(16).toString('hex')
            });
            // Save the token
            token.save(function(err) {
                if (err) {
                    return res.json({
                        "status": 500,
                        "message": err.message
                    });
                }
                // Send the email
                var mailOptions = {
                    to: user.email,
                    subject: 'Account Verification Token',
                    text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n'
                };
                smtpTransport.sendMail(mailOptions, function(err) {
                    if (err) {
                        return res.json({
                            "status": 500,
                            "message": err.message
                        });
                    }
                    res.json({
                        "status": 200,
                        "message": 'A verification email has been sent to ' + user.email + '.'
                    });
                });
            });
        });
    },

    forgotPassword: function(req, res, next) {

        var email = req.body.email || '';

        if (email == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }

        User.findOne({
                'email': email
            })
            .then(function(user) {

                if (!user) {
                    return res.json({
                        status: "404",
                        message: 'No user found with that email address'
                    })
                }
                ResetPassword.findOne({
                        'userId': user.id
                    })
                    .then(function(resetPass) {

                        if (resetPass) {
                            resetPass.deleteOne({
                                'id': resetPass._id
                            });
                            console.log("1 document deleted");
                        }


                        token = crypto.randomBytes(32).toString('hex') //creating the token to be sent to the forgot password form (react)

                        const resetPassword = new ResetPassword();

                        //hashing the reset token  to store in the db node.js
                        bcrypt.hash(token, 5, (err, hashedResetToken) => {
                            resetPassword.resetPasswordToken = hashedResetToken;
                            resetPassword.userId = user.id;
                            resetPassword.expire = moment.utc().add(config.tokenExpiry, 'seconds');

                            resetPassword.status = 0;
                            resetPassword.save();

                            let mailOptions = {
                                to: user.email,
                                subject: 'Reset your account password',
                                html: '<h4><b>Reset Password</b></h4>' +
                                    '<p>To reset your password, complete this form:</p>' +
                                    '<a href=' + config.clientUrl + '/resetPassword/?userId=' + user.id + '&resetToken=' + token + '>' + config.clientUrl + '/resetPassword/?userId=' + user.id + '&resetToken=' + token + '</a>' +
                                    '<br><br>' +
                                    '<p>--Team</p>'
                            }
                            smtpTransport.sendMail(mailOptions, function(error, response) {
                                if (error) {
                                    console.log(error);
                                    res.status(500);
                                    res.json({
                                        "status": 500,
                                        "message": "failure"
                                    });
                                } else {
                                    console.log("Message sent ");
                                    res.status(200);
                                    res.json({
                                        "status": 200,
                                        "message": "success"
                                    });
                                }
                            });

                        });
                    });
            });
    },
    resetPassword: function(req, res, next) {
        const userId = req.body.userId;
        const token = req.body.resetToken;
        const password = req.body.password;
        ResetPassword.findOne({
                'userId': userId
            })
            .then(function(resetPassword) {
                if (!resetPassword) {
                    res.status(401);
                    res.json({
                        "status": 401,
                        "message": "Invalid or expired reset token."
                    });

                }

                // the token and the hashed token in the db are verified befor updating the password
                bcrypt.compare(String(token), resetPassword.resetPasswordToken, (err, match) => {
                    if (match == true) {
                        var hash = bcrypt.hashSync(password, 5);
                        User.updateOne({
                                '_id': userId
                            }, {
                                $set: {
                                    'password': hash
                                }
                            })
                            .then((result) => {
                                ResetPassword.updateOne({
                                    'id': resetPassword.id
                                }, {
                                    $set: {
                                        'status': 1
                                    }
                                }).
                                then((msg) => {

                                    if (!msg) {

                                        res.status(500);
                                        res.json({
                                            "status": 500,
                                            "message": "Internal server error"
                                        });

                                    } else
                                        res.json({
                                            "status": "200",
                                            "message": 'Password Updated successfully.'
                                        })
                                })
                            }).catch((error) =>
                                res.json({
                                    "status": 500,
                                    "message": "Internal server error  " + error
                                })

                            )
                    } else {
                        res.status(401);
                        res.json({
                            "status": 401,
                            "message": "Reset token does not match"
                        });
                    }



                })
            })
    },

}

module.exports = users;