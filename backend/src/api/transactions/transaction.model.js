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
      required: true,
    },
    userId: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

transactionSchema.statics.createTransaction = createTransaction;
transactionSchema.statics.getCurrentMonthBalance = getCurrentMonthBalance;

const TransactionModel = mongoose.model('Transaction', transactionSchema);

async function createTransaction(info) {
  return this.create(info);
}

async function getCurrentMonthBalance(userId) {
  const date = new Date();
  const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  console.log('startMonth', startMonth);
  const expenseGroup = await this.aggregate([
    {
      $match: {
        userId,
        transactionDate: { $gte: startMonth },
      },
    },
    {
      $addFields: {
        expense: {
          $cond: [{ $eq: ['$type', 'EXPENSE'] }, '$amount', 0],
        },
        income: {
          $cond: [{ $eq: ['$type', 'INCOME'] }, '$amount', 0],
        },
      },
    },
    {
      $group: {
        _id: null,
        expense: { $sum: '$expense' },
        income: { $sum: '$income' },
        monthBalance: { $sum: { $subtract: ['$income', '$expense'] } },
      },
    },
  ]);
  if (expenseGroup.length) {
    const [{ monthBalance }] = expenseGroup;
    return monthBalance;
  } else return 0;
}

module.exports = {
  TransactionModel,
};
