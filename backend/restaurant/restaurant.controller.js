const express = require('express');
const config = require('../config.json');

const db = require('../_helpers/db');

const Restaurant = db.Restaurant;

var restaurants = {
	getAllRestaurants: function(req, res, next) {

    Restaurant.find((error, data) => {
      if (error) {
        return res.status(200).json({
          "status": 500,
          "message": err.message
        });
      } else {
        res.json(data)
      }
    })

  },
  getRestaurant: function(req, res, next) {
  	var restaurantId = req.body.restaurantId;
    Restaurant.findOne({
            'restaurantId': restaurantId
        }, function(err, restaurantDB) {
            if (restaurantDB) {
            	console.log("ssssssssssssssssssssssss");
                return res.json({
                    "status": 200,
                    "message": restaurantDB
                });
            } else {
            	console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
                return res.json({
                    "status": 404,
                    "message": "Restaurant does not found!!"
                });
            }
        });
    },
    addRestaurant: function(req, res, next) {
    var restaurantId=req.body.restaurantId;
    var restaurantParam = req.body;
    Restaurant.find({'restaurantId' : restaurantId},function (err, result) {
      if (err) {
        return res.json({
          "status": 500,
          "message": err.message
        });
      }
      if(result.length != 0){
        return res.status(409).json({
            "status": 409,
            "message":"Restaurant already exist"
        });
      }

      const restaurant = new Restaurant(restaurantParam);

      restaurant.save(function (err) {
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
  },

  updateDetailsRestaurant: function(req, res, next) {
  	    var restaurantId=req.body.restaurantId || '';
        var name = req.body.name || '';
        var adress = req.body.adress || '';
        var plan = req.body.plan || '';
        var prixMoyen = req.body.prixMoyen || '';
        var menu = req.body.menu || '';

        if (restaurantId == '' || name == '' || adress == '' || plan == '' || prixMoyen == '' || menu == '') {
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }
       else{
        Restaurant.findOne({
            'restaurantId' : restaurantId
        }, function(err, restaurantDB) {
            if (restaurantDB) {
                Restaurant.updateOne({
                        'restaurantId': restaurantDB.restaurantId
                    }, {
                        $set: {
                            'name': name,
                            'adress': adress,
                            'plan': plan,
                            'prixMoyen': prixMoyen,
                            'menu': menu
                        }
                    })
                    .then((result) => {          
                        res.json({
                            "status": 200,
                            "message": "success"
                        });
                    })
            } else {
                res.json({
                    "status": 404,
                    "message": "Restaurant does not exist"
                });
            }
        })
    }
    },
    deleteRestaurant: function(req, res, next) {
    	var restaurantId = req.body.restaurantId;
       
    	Restaurant.findOneAndRemove({
            'restaurantId': restaurantId
        }, function(err, restaurantDB) {
            if (restaurantDB) {
                return res.json({
                    "status": 200,
                    "message": "Restaurant deleted !!"
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Restaurant does not found!!"
                });
            }
        });
    }  

}
module.exports = restaurants;