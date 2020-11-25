const catchAsync = require('../../utils/catchAsync');
const { TransactionModel } = require('./transaction.model');
const { expensesCategories } = require('../dataset');

const createTransaction = catchAsync(async (req, res, next) => {
  const { body, user } = req;
  const userId = user._id;
  const info = { ...body, userId };
  const newTransaction = await TransactionModel.createTransaction(info);
  return res.status(201).json({
    status: 'success',
    transaction: newTransaction,
  });
});

const getTransactionCategories = (req, res) => {
  const categories = Object.values(expensesCategories);
  return res.json({
    categories,
  });
};

module.exports = {
  createTransaction,
  getTransactionCategories,
};
