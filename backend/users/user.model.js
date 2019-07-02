const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	_id: Number,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false }
},{ _id: false });

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: '_id'});
var User = mongoose.model('User', schema);





module.exports =User;
