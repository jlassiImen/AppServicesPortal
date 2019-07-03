const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	  paymentId: Number,
    userId:{ type: String, unique: true, required: true },
    creditCartNumber:{ type: String, unique: true, required: true },
    crypto:{ type: String, unique: true, required: true },
    dateExpiration:{type: Date}
});

schema.set('toJSON', { virtuals: true });
schema.plugin(AutoIncrement, {inc_field: 'paymentId'});
var Payment = mongoose.model('Payment', schema);

module.exports =Payment;
