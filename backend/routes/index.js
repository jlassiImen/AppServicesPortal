var express = require('express');
var router = express.Router();

var users = require('../users/users.controller.js');

router.post('/authenticate', users.authenticate);
router.post('/updatePassword', users.authenticate);
router.post('/registerUser',  users.register);  
router.post('/forgotPassword',  users.forgotPassword );            
router.post('/resetPassword', users.resetPassword);
router.post('/confirmRegistration', users.confirmation);
router.post('/resend', users.resendToken);

module.exports = router;
