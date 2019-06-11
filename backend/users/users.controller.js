const express = require('express');
const config = require('../config.json');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var moment = require("moment");
const User = db.User;
const ResetPassword = db.ResetPassword;

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
                    res.status(401);
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

    register: function(req, res, next) {
        var userParam = req.body;
        // vérifier si l'email existe déjà                        
        if (!User.findOne({
                email: userParam.email
            })) {
            throw 'email "' + userParam.email + '" is already taken';
        }

        const user = new User(userParam);
        // crypter le mot de passe
        user.password = bcrypt.hashSync(userParam.password, 10);

        // enregistrer user
        user.save();
        res.json({
            "status": 200,
            "message": "success"
        });
    },

    resetPassword: function(req, res, next) {

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
                ResetPassword.findOne({ 'userId': user.id })
                .then(function(resetPass) {
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa   "+JSON.stringify(resetPass));
                    if (resetPass){
                        resetPass.deleteOne({ 'id': resetPass._id});
                        console.log("1 document deleted");
                     }           

                            
                            token = crypto.randomBytes(32).toString('hex') //creating the token to be sent to the forgot password form (react)

                            const resetPassword = new ResetPassword();


                            resetPassword.resetPasswordToken = bcrypt.hashSync(token, 10);
                            resetPassword.userId = user.id;
                            resetPassword.expire = moment.utc().add(config.tokenExpiry, 'seconds');
                            //hashing the password to store in the db node.js

                            resetPassword.save();

                            let mailOptions = {
                                to: user.email,
                                subject: 'Reset your account password',
                                html: '<h4><b>Reset Password</b></h4>' +
                                    '<p>To reset your password, complete this form:</p>' +
                                    '<a href=' + config.clientUrl + 'reset/' + user.id + '/' + token + '">' + config.clientUrl + 'reset/' + user.id + '/' + token + '</a>' +
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
    }
}

module.exports = users;