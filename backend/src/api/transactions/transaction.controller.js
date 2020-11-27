const { TransactionModel } = require('./transaction.model');
const { expensesCategories } = require('../dataset');

const createTransaction = async (req, res, next) => {
  const { body, user } = req;
  const userId = user._id;
  const info = { ...body, userId };
  const newTransaction = await TransactionModel.createTransaction(info);
  return res.status(201).json({
    status: 'success',
    transaction: newTransaction,
  });
};

const getTransactionCategories = (req, res) => {
  const categories = Object.values(expensesCategories);
  return res.json({
    categories,
  });
};

const getListExpensesMonth = async (req, res, next) => {
  const { user } = req;
  const { month, year } = req.query;
  const startDate = new Date(year, month - 1);
  const endDate = new Date(year, month);
  const transactionsDB = await TransactionModel.find({
    userId: user._id,
    transactionDate: { $gte: startDate, $lt: endDate },
    type: 'EXPENSE',
  });
  const transactions = transactionsDB.map(
    ({ amount, category, comment, transactionDate }) => ({
      amount,
      category,
      comment,
      transactionDate,
    }),
  );
  return res.json(transactions);
};

const getListExpensesCategories = async (req, res, next) => {};

module.exports = {
  createTransaction,
  getTransactionCategories,
  getListExpensesMonth,
};
