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
  let { page, limit, month, year } = req.query;
  let pagination = true;
  if (!limit) {
    pagination = false;
    limit = 10;
  }
  if (!page) {
    page = 1;
  }
  const today = new Date();
  if (!year) {
    year = today.getFullYear();
  }
  if (!month) {
    month = today.getMonth();
  }
  const startDate = new Date(year, month - 1);
  const endDate = new Date(year, month);
  // select:   'title date author',
  const transactionsDB = await TransactionModel.find({
    userId: user._id,
    transactionDate: { $gte: startDate, $lt: endDate },
    type: 'EXPENSE',
  });
  const transactions = transactionsDB.map(
    ({ _id, amount, category, comment, transactionDate }) => ({
      _id,
      amount,
      category,
      comment,
      transactionDate,
    }),
  );
  var query = {};
  var options = {
    select: 'title date author',
    sort: { date: -1 },
    populate: 'author',
    lean: true,
    offset: 20,
    limit: 10,
  };
  // const transactions = await TransactionModel.paginate(query, {
  //   page,
  //   limit,
  //   pagination,
  // });
  // async getContacts(sub, pagination = false, page = 1, limit = 10) {
  //   let query = {};
  //   if (sub) {
  //     query = { subscription: sub };
  //   }
  //   const { docs } = await this.db.paginate(query, { page, limit, pagination });
  //   return docs;
  // }
  return res.json(transactions);
};

module.exports = {
  createTransaction,
  getTransactionCategories,
  getListExpensesMonth,
};
