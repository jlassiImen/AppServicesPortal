const express = require('express');
const config = require('../config.json');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User;

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

User.findOne({'email':email}, function(err, userFromDB) {
        if(userFromDB){
    	//comaper le mot de passe saisie par l'utilisateur et celle de la base de données
        if(bcrypt.compareSync(password, userFromDB.password)) {   
                              res.status(200);
                              res.json({
                                    "status": 200,
                                   "message": "success"
                               });
                        }
                 else {
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
 var userParam = req.body ;
      
    // vérifier si l'email existe déjà                        
    if ( !User.findOne({ email: userParam.email })) {
        throw 'email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // crypter le mot de passe
    user.password = bcrypt.hashSync(userParam.password, 10);
   process.stdout.write("yyyyyyy   "+JSON.stringify(user));
                            

    // enregistrer user
    user.save();
    res.json({
                "status": 200,
                "message": "success"
            });
}
}

module.exports = users;