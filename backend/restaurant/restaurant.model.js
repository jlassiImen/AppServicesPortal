const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	restaurantId: Number,
    name: { type: String, required: true },
    adress: { type: String, required: true },
    plan: { type: String, required: true },
    prixMoyen: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'restaurantId'});
var Restaurant = mongoose.model('Restaurant', schema);

module.exports =Restaurant;
