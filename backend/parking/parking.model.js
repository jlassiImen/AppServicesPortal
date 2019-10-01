const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	parkingId: Number,
    name: { type: String, required: true },
    adress: { type: String, required: true },
    averagePrice: { type: String, required: true },
    latitude: Number,
    longitude: Number
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'parkingId'});
var Paring = mongoose.model('Paring', schema);

module.exports =Paring;
