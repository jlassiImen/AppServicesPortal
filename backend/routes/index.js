var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');
var payment = require('../payment/payment.controler.js');
var categories = require('../categories/category.controller.js');

router.post('/authenticate', users.authenticate);
router.post('/updatePassword', users.updatePassword);
router.post('/registerUser',  users.register);  
router.post('/forgotPassword',  users.forgotPassword );            
router.post('/resetPassword', users.resetPassword);
router.get('/userDetails/:email', users.getUser);
router.get('/getCategories', categories.getAllCategories);
router.post('/addCategory', categories.addCategory);
router.post('/confirmRegistration', users.confirmation);
router.post('/resend', users.resendToken);
router.get('/userDetails/:email', users.getUser);
router.get('/userPayment/:userId', payment.getPayment);
router.get('/addPay/:creditCartNumber', payment.addPayment);


module.exports = router;
