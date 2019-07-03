const express = require('express');
const config = require('../config.json');

const db = require('../_helpers/db');
const Payment = db.Payment;

var payment = {
getPayment : function (req, res, next){
  var userId=req.params.userId;
    Payment.findOne({_userId:userId}, function (err, payment){
      if (payment) {
        return res.json({
          "status": 200,
          "message": payment
        });
      }
      else{
       return res.json({
          "status": 404,
          "message": "bank details not found!!"
        });
      }
  });
  },
  addPayment: function(req, res, next) {
    var userId = req.body.userId;
    var creditCartNumber = req.body.number;
    var paymentParam = req.body;

    Payment.find({number : creditCartNumber},function (err, result) {
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
            "message":"Credit cart number already exist"
        });
      }
    

      const payment = new Payment(paymentParam);

      payment.save(function (err) {
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
  }
  module.exports = payment;
