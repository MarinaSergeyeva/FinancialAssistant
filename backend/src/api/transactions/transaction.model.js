const mongoose = require('mongoose');
const {
  Schema,
  Types: { ObjectId },
} = mongoose;
const { transactionCategories } = require('../dataset');

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  transactionDate: { type: Date, required: true },
  type: {
    type: String,
    enum: ['INCOME', 'EXPENSE'],
    default: 'EXPENSE',
    required: true,
  },
  comment: { type: String, default: '' },
  category: {
    type: Object,
    enum: transactionCategories,
    default: transactionCategories[0],
  },
  userId: { type: ObjectId, ref: 'User' },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: Date,
});

module.exports = mongoose.model('Transaction', transactionSchema);
