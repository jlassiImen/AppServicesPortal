const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//pour gerer l'auto incrementation de l'id
const AutoIncrement = require('mongoose-sequence')(mongoose);

const resetPasswordSchema = new Schema({
    resetPasswordToken: { type: String, required: false },
    expire: { type: String, required: false },
    userId:{ type: String, unique: true, required: true },
    status:{ type: Number, required: false }
});

resetPasswordSchema.set('toJSON', { virtuals: true });

resetPasswordSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('ResetPassword', resetPasswordSchema);
