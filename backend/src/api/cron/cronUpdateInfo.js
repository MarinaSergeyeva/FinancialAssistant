const cron = require('node-cron');
const UserDB = require('../users/user.model');
const {
  incrementUserBalance,
  createIncomeTransaction,
  getTotalExpensesAndSendReport,
} = require('./cronUtils');
const { TransactionModel } = require('../transactions/transaction.model');

const updateInfo = () => {
  cron.schedule('0 0 1 * *', async () => {
    const myUser = await UserDB.findOne({ email: 'NewYear@gmail.com' });

    await TransactionModel.create({
      amount: myUser.totalSalary + myUser.passiveIncome,
      userId: myUser._id,
      transactionDate: Date.now(),
      type: 'INCOME',
    });
    await TransactionModel.create({
      amount: 45000,
      userId: myUser._id,
      transactionDate: Date.now(),
      type: 'EXPENSE',
    });
    await monthReportModel.create({
      userId: myUser._id,
      totalExpenses: myUser.totalExpenses,
      totalSavings:
        myUser.totalSalary + myUser.passiveIncome - myUser.totalExpenses,
      totalIncome: myUser.totalSalary + myUser.passiveIncome,
      expectedSavingsPercentage: myUser.incomePercentageToSavings,
      expectedSavings: (myUser.totalSalary + myUser.passiveIncome) * myUser.incomePercentageToSavings) / 100,
    });
    //const users = await UserDB.find();
    // await Promise.all(
    //users.map(async user => {
    //   await incrementUserBalance(user);
    //   await createIncomeTransaction(user);
    //   await getTotalExpensesAndSendReport(user);
    //   if (user.flatPrice !== 0 && user.flatSquareMeters !== 0) {
    //     sqmPrice = user.flatPrice / user.flatSquareMeters;
    //     user.giftsForUnpacking = Math.floor(
    //       user.balance / sqmPrice - user.giftsUnpacked,
    //     );
    //     await user.save();
    //   }
    // }
    //),
    // );
  });
};

module.exports = { updateInfo };
