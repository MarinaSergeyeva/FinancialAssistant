const catchAsync = require('../../utils.js/catchAsync');
const { TransactionModel } = require('./transaction.model');
const { expensesCategories } = require('../dataset');

const createTransaction = catchAsync(async (req, res, next) => {
  const { body, user } = req;
  const newTransaction = await TransactionModel.create(body);
  res.status(201).json({
    status: 'success',
    transaction: newTransaction,
    userId: user._id,
  });
});

const getTransactionCategories = catchAsync(async (req, res) => {
  const categories = await Object.values(expensesCategories);
  res.json({
    categories,
  });
});

module.exports = {
  createTransaction,
  getTransactionCategories,
};
