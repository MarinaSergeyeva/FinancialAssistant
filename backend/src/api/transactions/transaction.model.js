const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
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
      required: true,
    },
    userId: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

transactionSchema.statics.createTransaction = createTransaction;
transactionSchema.statics.getCurrentMonthExpenses = getCurrentMonthExpenses;

transactionSchema.plugin(mongoosePaginate);

const TransactionModel = mongoose.model('Transaction', transactionSchema);

async function createTransaction(info) {
  return this.create(info);
}

async function getCurrentMonthExpenses(userId) {
  const date = new Date();
  const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  console.log('startMonth', startMonth);
  const expenseGroup = await this.aggregate([
    {
      $match: {
        userId,
        transactionDate: { $gte: startMonth },
        type: 'EXPENSE',
      },
    },
    {
      $group: {
        _id: null,
        expenses: { $sum: '$amount' },
      },
    },
  ]);
  if (expenseGroup.length) {
    const [{ expenses }] = expenseGroup;
    return expenses;
  } else return 0;
}

module.exports = {
  TransactionModel,
};
