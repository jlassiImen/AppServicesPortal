const express = require('express');
const config = require('../config.json');

const db = require('../_helpers/db');

const Category = db.Category;

var categories = {
  
  getAllCategories: function(req, res, next) {

    Category.find((error, data) => {
      if (error) {
        return res.status(500).json({
          "status": 500,
          "message": err.message
        });
      } else {
        res.json(data)
      }
    })

  },
  addCategory: function(req, res, next) {
    var categoryName=req.body.name;
    var categoryParam = req.body;
    Category.find({'name' : categoryName},function (err, result) {
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

  },

  deleteCategory: function(req, res, next) {
      var categoryName=req.body.name;
       
      Category.findOneAndRemove({
            'name' : categoryName
        }, function(err, categoryDB) {
            if (categoryDB) {
                return res.json({
                    "status": 200,
                    "message": "Category deleted !!"
                });
            } else {
                return res.json({
                    "status": 404,
                    "message": "Category does not found!!"
                });
            }
        });
    }  
  }

module.exports = categories;
