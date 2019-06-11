var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');

router.post('/authenticate', users.authenticate);
router.post('/registerUser',  users.register);  
router.post('/resetPassword',  users.resetPassword );            



module.exports = router;
