const express = require('express');
const config = require('../config.json');
const request = require('request');
const db = require('../_helpers/db');

const Restaurant = db.Restaurant;
const MenuCategory = db.MenuCategory;
const MenuItem = db.MenuItem;

var NodeGeocoder = require('node-geocoder');
var geocoder = NodeGeocoder(config.NodeGeocoderOptions);


var restaurants = {
  getYelpRestaurants: function(req, res, next) {
    var location=req.body.location;
    var radius=req.body.radius;
    var price=req.body.price;
    var open_now=req.body.open_now;
    var limit=req.body.limit;
    var offset=req.body.offset;
    var sort_by=req.body.sort_by;
    var open_at=req.body.open_at;
    var categories=req.body.categories;
    var term=req.body.term;


    var params="?location="+location+"&&term="+term;


    if(radius!= null && radius!= undefined){
      params=params+"&&radius="+radius;
      
    }
    if(price!= null && price!= undefined){
      params=params+"&&price="+price;
    }
    if(open_now!= null && open_now!= undefined){
      params=params+"&&open_now="+open_now;
    }
    if(limit!= null && limit!= undefined){
      params=params+"&&limit="+limit;
    }
    if(offset!= null && offset!= undefined){
      params=params+"&&offset="+offset;
    }
    if(sort_by!= null && sort_by!= undefined){
      params=params+"&&sort_by="+sort_by;
    }
    if(open_at!= null && open_at!= undefined){
      params=params+"&&open_at="+open_at;
    }
    if(categories!= null && categories!= undefined){
      params=params+"&&categories="+categories;
    }
   

              request({
                url: config.yelpApiUrl+params,
                method: 'get',
                headers: {
                    "Authorization": config.yelpToken
                },
            }, function (err, resp) {
                if (err ) {
                    log.error('an error has occured :', err);
                     return  
                      res.json({
          "status": 500,
          "message": err.message
        });
                }
              
              return  res.json(JSON.parse(resp.body).businesses );  
              concole.log ("aaaaaaaaaaaaaaaaaaaaaa" + JSON.parse(resp.body).businesses);    
            });
  },


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
  	var restaurantId = req.params.restaurantId;
    Restaurant.findOne({
            'restaurantId': restaurantId
        }, function(err, restaurantDB) {
            if (restaurantDB) {
              return res.json({
                    "status": 200,
                    "message": restaurantDB
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Restaurant does not found!!"
                });
            }
        });
    },
  
  getRestaurantDetails: function(req, res, next) {
  	var restaurantId = req.params.restaurantId;
    Restaurant.findOne({
            'restaurantId': restaurantId
        }, function(err, restaurantDB) {
            if (restaurantDB) {


    MenuItem.find({
        'restaurantId': restaurantId
        }, function(err, menuItemDB) {
            if (menuItemDB) {
        MenuCategory.find(function(err, menuCategoryDB) {
            if (menuCategoryDB) {
    var finalResult= menuItemDB.map(function(item) {
    	menuCategoryDB.map(function(category) {
    		if(item.menuCategoryId === category.menuCategoryId){
    			item['categoryName']=category.name;		
    		}
		});
    	var finalItem={
    		"item":item,
    		"category":item['categoryName']
    	}
    	return finalItem;
	});
	var result={
            		"restaurant":restaurantDB,
            		"menu":finalResult
            	}
                return res.json({
                    "status": 200,
                    "message": result
                });	
            } else {
                return res.json({
                    "status": 404,
                    "message": "Dishes does not found!!"
                });
            }
        });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Dishes does not found!!"
                });
            }
        });

            } else {
                return res.json({
                    "status": 404,
                    "message": "Restaurant does not found!!"
                });
            }
        });
    },
addRestaurant: function(req, res, next) {
    var restaurantParam = req.body;  
      const restaurant = new Restaurant(restaurantParam);
      geocoder.geocode(restaurant.adress, function(err, result) {
      console.log(result);
      restaurant.latitude=result[0].latitude;
      restaurant.longitude=result[0].longitude;

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
  } ,
  updateDetailsRestaurant: function(req, res, next) {
  	    var restaurantId=req.body.restaurantId || '';
        var name = req.body.name || '';
        var adress = req.body.adress || '';
        var plan = req.body.plan || '';
        var prixMoyen = req.body.prixMoyen || '';

        if (restaurantId == '' || name == '' || adress == '' || plan == '' || prixMoyen == '' ) {
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
    },

    getMenuItem: function(req, res, next) {
  	var name = req.body.name;
  	var restaurantId = req.body.restaurantId;

    MenuItem.find({
        'name': name,
        'restaurantId': restaurantId
        }, function(err, menuItemDB) {
            if (menuItemDB) {
                return res.json({
                    "status": 200,
                    "message": menuItemDB
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Dishes does not found!!"
                });
            }
        });
    }, 

    getMenuCategory: function(req, res, next) {
  	var name = req.body.name;

    MenuItem.find({
    	"name":name
        }, function(err, menuCategoryDB) {
            if (menuCategoryDB) {
                return res.json({
                    "status": 200,
                    "message": menuCategoryDB
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Dishes does not found!!"
                });
            }
        });
    },

  addMenuCategory: function(req, res, next) {
    var name=req.body.name;
    var menuCategoryParam = req.body;

    MenuCategory.find({'name' : name},function (err, result) {
      if (err) {
        return res.json({
          "status": 500,
          "message": err.message
        });
      }
      if(result.length != 0){
        return res.status(409).json({
            "status": 409,
            "message":"Category already exist"
        });
      }

      const menuCategory = new MenuCategory(menuCategoryParam);

      menuCategory.save(function (err) {
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

  addMenuItem: function(req, res, next) {
    var menuItemParam = req.body;  
      const menuItem = new MenuItem(menuItemParam);
      menuItem.save(function (err) {
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
  } 

  

}
module.exports = restaurants;