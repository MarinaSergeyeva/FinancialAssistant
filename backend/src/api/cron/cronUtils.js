const { TransactionModel } = require('../transactions/transaction.model');
const monthReportModel = require('./monthReport.model');

const incrementUserBalance = async user => {
  const income = user.totalSalary + user.passiveIncome;
  user.balance += income;
  await user.save();
};

const createIncomeTransaction = async user => {
  await TransactionModel.create({
    amount: user.totalSalary + user.passiveIncome,
    //amount: 10000,
    userId: user._id,
    transactionDate: Date.now(),
    type: 'INCOME',
    //type: 'EXPENSE',
  });
};
let totalExpenses;
const getTotalExpensesAndSendReport = async user => {
  let now = new Date();
  const previousMonth = now.getMonth();
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: user._id,
        $expr: {
          $eq: [{ $month: '$transactionDate' }, previousMonth],
        },
        type: 'EXPENSE',
      },
    },

    {
      $group: {
        _id: null,
        total: { $sum: '$amount' },
      },
    },
  ]);

  if (result.length === 0) {
    totalExpenses = 0;
  } else {
    const [{ total }] = result;
    totalExpenses = total;
  }
  createMonthReport(user, totalExpenses);
};

const createMonthReport = async (user, totalExpenses) => {
  const income = user.totalSalary + user.passiveIncome;
  await monthReportModel.create({
    userId: user._id,
    totalExpenses: totalExpenses,
    totalSavings: income - totalExpenses,
    totalIncome: income,
    expectedSavingsPercentage: user.incomePercentageToSavings,
    expectedSavings: (income * user.incomePercentageToSavings) / 100,
  });
};

module.exports = {
  incrementUserBalance,
  createIncomeTransaction,
  getTotalExpensesAndSendReport,
  createMonthReport,
};
