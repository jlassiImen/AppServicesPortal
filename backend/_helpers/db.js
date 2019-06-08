const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect
(process.env.MONGODB_URI || config.connectionString, 
{ useCreateIndex: true, useNewUrlParser: true})
.then(()=> {
	console.log("connected to MongoDb");
})
.catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};