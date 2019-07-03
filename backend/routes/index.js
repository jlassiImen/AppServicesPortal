var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');
var categories = require('../categories/category.controller.js');

router.post('/authenticate', users.authenticate);
router.post('/registerUser',  users.register);  
router.post('/forgotPassword',  users.forgotPassword );            
router.post('/resetPassword', users.resetPassword);
router.get('/userDetails/:email', users.getUser);
router.get('/getCategories', categories.getAllCategories);
router.post('/addCategory', categories.addCategory);

module.exports = router;
