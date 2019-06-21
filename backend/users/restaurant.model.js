const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//pour gerer l'auto incrementation de l'id
const AutoIncrement = require('mongoose-sequence')(mongoose);

const retaurantSchema = new Schema({
    _id: Number,
    personne: { type: Number, unique: true, required: true },
    date: { type: Date, default: Date.now },
    heure: { type: Time, default:Date.now.getTime()},
    adresse: { type: String, required: true },
    typeRestaurant: { type: String, required: true }
    
});

restaurantSchema.set('toJSON', { virtuals: true });

restaurantSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Restaurant', restaurantSchema);
