const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	menuCategoryId: Number,
    name: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'menuCategoryId'});
var MenuCategory = mongoose.model('MenuCategory', schema);

module.exports =MenuCategory;
