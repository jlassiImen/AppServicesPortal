const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	educationId: Number,
    name: { type: String, required: true },
    adress: { type: String, required: true },
    plan: { type: String, required: true },
    prixMoyen: { type: String, required: true },
    latitude: Number,
    longitude: Number
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'educationId'});
var Education = mongoose.model('Education', schema);

module.exports =Education;
