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
transactionSchema.statics.getStatsMonthExpenses = getStatsMonthExpenses;

transactionSchema.plugin(mongoosePaginate);

const TransactionModel = mongoose.model('Transaction', transactionSchema);

async function createTransaction(info) {
  return this.create(info);
}

async function getCurrentMonthExpenses(userId) {
  const date = new Date();
  const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
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

async function getStatsMonthExpenses(query) {
  const expenseGroup = await this.aggregate([
    {
      $match: query,
    },
    {
      $group: {
        _id: '$category',
        amountArray: { $push: '$amount' },
        countTransactions: { $sum: 1 },
      },
    },
    {
      $project: {
        total: {
          $reduce: {
            input: '$amountArray',
            initialValue: 0,
            in: { $add: ['$$value', '$$this'] },
          },
        },
        count: '$countTransactions',
      },
    },
  ]);
  let categories = null;
  let totalAmount = 0;
  let totalCount = 0;
  if (expenseGroup.length) {
    totalCount = expenseGroup.reduce((acc, item) => {
      acc += item.count;
      totalAmount += item.total;
      return acc;
    }, 0);
    categories = Object.fromEntries(
      Object.entries(expensesCategories).map(([key, value]) => {
        const newKey = key.toLowerCase();
        idxCat = expenseGroup.findIndex(item => value === item._id);
        const newValue = idxCat === -1 ? 0 : expenseGroup[idxCat].total;
        return [newKey, newValue];
      }),
    );
  }
  return { totalAmount, totalCount, categories };
}

module.exports = { TransactionModel };
