const express = require('express');
const config = require('../config.json');

const db = require('../_helpers/db');

const Restaurant = db.Restaurant;

var Restaurant = {
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
}