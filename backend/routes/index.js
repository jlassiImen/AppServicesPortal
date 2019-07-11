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
router.post('/confirmRegistration', users.confirmation);
router.post('/resend', users.resendToken);
router.delete('/deleteUser', users.deleteUser);

router.get('/getCategories', categories.getAllCategories);
router.post('/addCategory', categories.addCategory);
router.delete('/deleteCategory', categories.deleteCategory);



router.get('/userPayment/:userId', payment.getPayment);
router.get('/addPay/:creditCartNumber', payment.addPayment);


router.get('/allRestaurant', restaurants.getAllRestaurants);
router.get('/restaurant/:restaurantId', restaurants.getRestaurant);
router.post('/addRestaurant',  restaurants.addRestaurant); 
router.post('/updateDetailsRestaurant',  restaurants.updateDetailsRestaurant); 
router.delete('/deleteRestaurant',  restaurants.deleteRestaurant); 
router.get('/getMenuItem',  restaurants.getMenuItem);
router.post('/addMenuCategory',  restaurants.addMenuCategory);
router.post('/addMenuItem',  restaurants.addMenuItem);
router.get('/restaurantDetails/:restaurantId',  restaurants.getRestaurantDetails);
router.get('/getMenuCategory/:name',  restaurants.getMenuCategory);




module.exports = router;
