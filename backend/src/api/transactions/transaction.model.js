const mongoose = require('mongoose');
const {
  Schema,
  Types: { ObjectId },
} = mongoose;
const { expensesCategories } = require('../dataset');

const transactionSchema = new Schema(
  {
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
      type: String,
      enum: Object.values(expensesCategories),
      default: expensesCategories.OTHER,
    },
    userId: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

transactionSchema.statics.createTransaction = createTransaction;

const TransactionModel = mongoose.model('Transaction', transactionSchema);

async function createTransaction(info) {
  return this.create(info);
}


module.exports = {
  TransactionModel,
};
