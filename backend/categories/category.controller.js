const express = require('express');
const config = require('../config.json');

const db = require('../_helpers/db');

const Category = db.Category;



process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


var categories = {
  
  getAllCategories: function(req, res, next) {

    Category.find(function (err, result) {
      if (err) {
        return res.status(200).json({
          "status": 500,
          "message": err.message
        });
      }

          res.status(200);
          res.json({
              "status": 200,
              "message":result
          });
      
  });

  },
  addCategory: function(req, res, next) {
    var categoryName=req.body.name;
    var categoryParam = req.body;
    Category.find({name : categoryName},function (err, result) {
      console.log(JSON.stringify(result));
      if (err) {
        return res.json({
          "status": 500,
          "message": err.message
        });
      }
      if(result.length != 0){
        return res.status(409).json({
            "status": 409,
            "message":"category already exist"
        });
      }

      const category = new Category(categoryParam);

      category.save(function (err) {
        if (err) {
          return res.json({
            "status": 500,
            "message": err.message
          });
        }
          res.status(200);
          res.json({
              "status": 200,
              "message":"success"
          });
      
        });
  });

  }
  
  /* ,

  addCategory: function (req, res, next) {
    var categoryParam = req.body;
    // vérifier si l'email existe déjà
    Category.findOne({ email: req.body.email }, function (err, userResult) {
      // Make sure Category doesn't already exist
      console.log("finfoooooooooooooooone      " + JSON.stringify(userResult));
      if (userResult) {
        return res.json({
          "status": 409,
          "message": "email is already taken"
        });
      }


      const Category = new Category(userParam);
      // crypter le mot de passe
      Category.password = bcrypt.hashSync(userParam.password, 5);

      // enregistrer Category
      Category.save(function (err) {
        if (err) {
          return res.json({
            "status": 500,
            "message": "Internal server error"
          });
        }


        // Create a verification token for this Category
        var token = new Token({ _userId: new ObjectID(Category._id), token: crypto.randomBytes(16).toString('hex') });

        // Save the verification token
        token.save(function (err) {
          if (err) {
            console.log("rrrrrrrrrrrrr       " + err);
            return res.json({
              "status": 500,
              "message": "Internal server error"
            });
          }

          // Send the email

          var mailOptions = {
            to: Category.email,
            subject: 'Account Verification Token',
            text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n'
          };
          smtpTransport.sendMail(mailOptions, function (err) {
            if (err) {
              return res.status(500).send({ msg: err.message });
            }
            res.status(200);
            res.json({
              "status": 200,
              "message": "success"
            });
          });
        });
      });
    }); */
  }

module.exports = categories;
