const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  description: { type: String, required: [1, 'Please add a description.'] },
  amount: {
    type: Number,
    required: [1, 'Please add a positive or negative number.'],
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('Transaction', transactionSchema);
