const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const tokenSchema = new mongoose.Schema({
  toeknId: Number,
  _userId: { type: Number, required: true, ref: 'User' },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

tokenSchema.set('toJSON', { virtuals: true });

tokenSchema.plugin(AutoIncrement, { inc_field: 'toeknId' });


module.exports = mongoose.model('Token', tokenSchema);
