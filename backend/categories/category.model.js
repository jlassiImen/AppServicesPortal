const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	categoryId: Number,
    name: { type: String, unique: true, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'categoryId'});
var User = mongoose.model('Category', schema);



module.exports =User;
