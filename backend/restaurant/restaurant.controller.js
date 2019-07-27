const express = require('express');
const config = require('../config.json');
const request = require('request');
const db = require('../_helpers/db');

const Restaurant = db.Restaurant;
const MenuCategory = db.MenuCategory;
const MenuItem = db.MenuItem;

var NodeGeocoder = require('node-geocoder');
var geocoder = NodeGeocoder(config.NodeGeocoderOptions);

var Latinise={};
Latinise.latin_map={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};



var restaurants = {

  getYelpRestaurants: function (req, res, next) {
    var location = req.body.location.replace(/[^A-Za-z0-9\[\] ]/g,
      function(a){
        return Latinise.latin_map[a]||a
      });
    var radius = req.body.radius;
    var price = req.body.price;
    var sort_by = req.body.sort_by;
    var open_at = req.body.open_at;
    var categories = req.body.categories;
    var alias = req.body.alias;
    var term = req.body.term;


    var params = "?location=" + location + "&&term=" + term;


    if (radius != null && radius != undefined) {
      params = params + "&&radius=" + radius;

    }
    if (price != null && price != undefined) {
      params = params + "&&price=" + price;
    }
    if (sort_by != null && sort_by != undefined) {
      params = params + "&&sort_by=" + sort_by;
    }
    if (open_at != null && open_at != undefined) {
      params = params + "&&open_at=" + open_at;
    }
    if (categories != null && categories != undefined) {
      params = params + "&&categories=" + categories;
    }

console.log(config.yelpApiUrl + params);
    request({
      url: config.yelpApiUrl + params,
      method: 'get',
      headers: {
        "Authorization": config.yelpToken
      },
    }, function (err, resp) {
      if (err) {
        log.error('an error has occured :', err);
        res.json({
          "status": 500,
          "message": err.message
        });
      }

      res.json(JSON.parse(resp.body).businesses);
    });
  },


  getAllRestaurants: function (req, res, next) {

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

  getRestaurant: function (req, res, next) {
    var restaurantId = req.params.restaurantId;
    Restaurant.findOne({
      'restaurantId': restaurantId
    }, function (err, restaurantDB) {
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

  getRestaurantDetails: function (req, res, next) {
    var restaurantId = req.params.restaurantId;
    Restaurant.findOne({
      'restaurantId': restaurantId
    }, function (err, restaurantDB) {
      if (restaurantDB) {


        MenuItem.find({
          'restaurantId': restaurantId
        }, function (err, menuItemDB) {
          if (menuItemDB) {
            MenuCategory.find(function (err, menuCategoryDB) {
              if (menuCategoryDB) {
                var finalResult = menuItemDB.map(function (item) {
                  menuCategoryDB.map(function (category) {
                    if (item.menuCategoryId === category.menuCategoryId) {
                      item['categoryName'] = category.name;
                    }
                  });
                  var finalItem = {
                    "item": item,
                    "category": item['categoryName']
                  }
                  return finalItem;
                });
                var result = {
                  "restaurant": restaurantDB,
                  "menu": finalResult
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
  addRestaurant: function (req, res, next) {
    var restaurantParam = req.body;
    const restaurant = new Restaurant(restaurantParam);
    geocoder.geocode(restaurant.adress, function (err, result) {
      console.log(result);
      restaurant.latitude = result[0].latitude;
      restaurant.longitude = result[0].longitude;

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
          "message": "success"
        });
      });
    });
  },
  updateDetailsRestaurant: function (req, res, next) {
    var restaurantId = req.body.restaurantId || '';
    var name = req.body.name || '';
    var adress = req.body.adress || '';
    var plan = req.body.plan || '';
    var prixMoyen = req.body.prixMoyen || '';

    if (restaurantId == '' || name == '' || adress == '' || plan == '' || prixMoyen == '') {
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
    }
    else {
      Restaurant.findOne({
        'restaurantId': restaurantId
      }, function (err, restaurantDB) {
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
  deleteRestaurant: function (req, res, next) {
    var restaurantId = req.body.restaurantId;

    Restaurant.findOneAndRemove({
      'restaurantId': restaurantId
    }, function (err, restaurantDB) {
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

  getMenuItem: function (req, res, next) {
    var name = req.body.name;
    var restaurantId = req.body.restaurantId;

    MenuItem.find({
      'name': name,
      'restaurantId': restaurantId
    }, function (err, menuItemDB) {
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

  getMenuCategory: function (req, res, next) {
    var name = req.body.name;

    MenuItem.find({
      "name": name
    }, function (err, menuCategoryDB) {
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

  addMenuCategory: function (req, res, next) {
    var name = req.body.name;
    var menuCategoryParam = req.body;

    MenuCategory.find({ 'name': name }, function (err, result) {
      if (err) {
        return res.json({
          "status": 500,
          "message": err.message
        });
      }
      if (result.length != 0) {
        return res.status(409).json({
          "status": 409,
          "message": "Category already exist"
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
          "message": "success"
        });

      });
    });
  },

  addMenuItem: function (req, res, next) {
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
        "message": "success"
      });

    });
  }



}
module.exports = restaurants;