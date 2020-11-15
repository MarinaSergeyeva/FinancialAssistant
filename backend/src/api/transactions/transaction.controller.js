const catchAsync = require('../../utils.js/catchAsync');
const {TransactionModel} = require('./transaction.model');

const createTransaction = catchAsync(async (req, res, next) => {
  const { body } = req;
    const newTransaction = await TransactionModel.create(body);
  res.status(201).json({
    status: 'success',
    transaction: newTransaction,
  });
});

const getTransactionCategories = catchAsync(async (req, res) => {
    const transaction = await TransactionModel.find();
  const categories = transaction.map(obj => obj.category);
  res.json({
    status: 'success',
    results: transaction.length,
    categories,
  });
});

module.exports = {
  createTransaction,
  getTransactionCategories,
};
