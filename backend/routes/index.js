var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');
var payment = require('../payment/payment.controler.js');
var categories = require('../categories/category.controller.js');
var restaurants = require('../restaurant/restaurant.controller.js');

router.post('/authenticate', users.authenticate);
router.post('/updatePassword', users.updatePassword);
router.post('/updatePersonnelProfile', users.updatePersonnelProfile);
router.post('/registerUser',  users.register);  
router.post('/forgotPassword',  users.forgotPassword );            
router.post('/resetPassword', users.resetPassword);
router.get('/userDetails/:email', users.getUser);
router.get('/getCategories', categories.getAllCategories);
router.post('/addCategory', categories.addCategory);
router.post('/confirmRegistration', users.confirmation);
router.post('/resend', users.resendToken);
router.get('/userPayment/:userId', payment.getPayment);
router.get('/addPay/:creditCartNumber', payment.addPayment);
router.get('/allRestaurant', restaurants.getAllRestaurants);
router.get('/restaurantDetails/:restaurantId', restaurants.getRestaurant);
router.post('/addRestaurant',  restaurants.addRestaurant); 
router.post('/updateDetailsRestaurant',  restaurants.updateDetailsRestaurant); 
router.post('/deleteRestaurant',  restaurants.deleteRestaurant); 


module.exports = router;
