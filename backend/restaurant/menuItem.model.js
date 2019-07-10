const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	menuItemId: Number,
    name: { type: String, required: true },
    price: { type: String, required: true },
    menuCategoryId: { type: Number, required: true, ref: 'menuCategory' },
    restaurantId: { type: Number, required: true, ref: 'Restaurant' }
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'menuItemId'});
var MenuItem = mongoose.model('MenuItem', schema);

module.exports =MenuItem;
