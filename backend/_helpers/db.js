const config = require('../config.json');
const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect
(process.env.MONGOLAB_IVORY_URI || config.connectionString, 
{ useCreateIndex: true, useNewUrlParser: true})
.then(()=> {
	console.log("connected to MongoDb");
})
.catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
  User: require('../users/user.model'),
  ResetPassword: require('../users/resetPassword.model'),
  Token: require('../users/tokenVerification.model'),
  Payment: require('../payment/payment.model'),
  Category: require('../categories/category.model'),
  Restaurant: require('../restaurant/restaurant.model')
};



