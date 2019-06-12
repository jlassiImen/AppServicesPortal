const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resetPasswordSchema = new Schema({
    resetPasswordToken: { type: String, required: false },
    expire: { type: String, required: false },
    userId:{ type: String, unique: true, required: true },
    status:{ type: Number, required: false }
});

resetPasswordSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ResetPassword', resetPasswordSchema);