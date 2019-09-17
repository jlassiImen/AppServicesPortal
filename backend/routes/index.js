var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');
var payment = require('../payment/payment.controler.js');
var categories = require('../categories/category.controller.js');
var restaurants = require('../restaurant/restaurant.controller.js');
var hotels = require('../hotels/hotels.controller.js');
var cinema = require('../cinema/cinema.controller.js');

//Users
router.post('/api/v1/authenticate', users.authenticate);
router.post('/api/v1/updatePassword', users.updatePassword);
router.post('/api/v1/updatePersonnelProfile', users.updatePersonnelProfile)
router.post('/api/v1/registerUser',  users.register);  
router.post('/api/v1/forgotPassword',  users.forgotPassword );            
router.post('/api/v1/resetPassword', users.resetPassword);
router.get('/api/v1/userDetails/:email', users.getUser);
router.post('/api/v1/confirmRegistration', users.confirmation);
router.post('/api/v1/resend', users.resendToken);
router.delete('/api/v1/deleteUser', users.deleteUser);

//categories
router.get('/api/v1/getCategories', categories.getAllCategories);
router.post('/api/v1/addCategory', categories.addCategory);
router.delete('/api/v1/deleteCategory', categories.deleteCategory);

//paiment
router.get('/api/v1/userPayment/:userId', payment.getPayment);
router.get('/api/v1/addPay/:creditCartNumber', payment.addPayment);

//restaurants
router.get('/api/v1/allRestaurant', restaurants.getAllRestaurants);
router.get('/api/v1/restaurant/:restaurantId', restaurants.getRestaurant);
router.post('/api/v1/addRestaurant',  restaurants.addRestaurant); 
router.post('/api/v1/updateDetailsRestaurant',  restaurants.updateDetailsRestaurant); 
router.delete('/api/v1/deleteRestaurant',  restaurants.deleteRestaurant); 
router.get('/api/v1/getMenuItem',  restaurants.getMenuItem);
router.post('/api/v1/addMenuCategory',  restaurants.addMenuCategory);
router.post('/api/v1/addMenuItem',  restaurants.addMenuItem);
router.get('/api/v1/restaurantDetails/:restaurantId',  restaurants.getRestaurantDetails);
router.get('/api/v1/getMenuCategory/:name',  restaurants.getMenuCategory);
router.post('/api/v1/getYelpRestaurants',  restaurants.getYelpRestaurants);
router.get('/api/v1/getYelpRestaurantsDetails/:id',  restaurants.getYelpRestaurantsDetails);
router.get('/api/v1/getYelpRestaurantsReviews/:id',  restaurants.getYelpRestaurantsReviews);

//hotels
router.post('/api/v1/getYelpHotels',  hotels.getYelpHotels);
router.get('/api/v1/getYelpHotelsDetails/:id',  hotels.getYelpHotelsDetails);
router.get('/api/v1/getYelpHotelsReviews/:id',  hotels.getYelpHotelsReviews);

//cinema
router.post('/api/v1/getYelpCinema',  cinema.getYelpCinema);
router.get('/api/v1/getYelpCinemaDetails/:id',  cinema.getYelpCinemaDetails);
router.get('/api/v1/getYelpCinemaReviews/:id',  cinema.getYelpCinemaReviews);


module.exports = router;
