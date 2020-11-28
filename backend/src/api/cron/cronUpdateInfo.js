const cron = require('node-cron');
const UserDB = require('../users/user.model');
const monthReportModel = require('./monthReport.model');
const ObjectId = require('mongoose').ObjectId;
// const {
//   incrementUserBalance,
//   createIncomeTransaction,
//   getTotalExpensesAndSendReport,
// } = require('./cronUtils');
const { TransactionModel } = require('../transactions/transaction.model');

const updateInfo = () => {
  cron.schedule('*/10 * * * * *', async () => {
    let transaction;
    // await UserDB.deleteMany({});
    // await TransactionModel.deleteMany({});
    // await monthReportModel.deleteMany({});

    //cron.schedule('0 0 1 * *', async () => {
    //const myUser = await UserDB.findById('5fc219ef0b96b100593c938a');
    const myUser = await UserDB.findOne({
      // _id: ObjectId('5fc219ef0b96b100593c938a'),
      username: 'NewYear',
    });
    // await Promise.all(async () => {
    await TransactionModel.create({
      amount: myUser.totalSalary + myUser.passiveIncome,
      userId: myUser._id,
      transactionDate: Date.now(),
      type: 'INCOME',
    });
    transaction = await TransactionModel.create({
      amount: 15000,
      userId: myUser._id,
      transactionDate: Date.now(),
      type: 'EXPENSE',
    });
    await monthReportModel.create({
      userId: myUser._id,
      totalExpenses: transaction.amount,
      totalSavings:
        myUser.totalSalary + myUser.passiveIncome - transaction.amount,
      totalIncome: myUser.totalSalary + myUser.passiveIncome,
      expectedSavingsPercentage: myUser.incomePercentageToSavings,
      expectedSavings:
        ((myUser.totalSalary + myUser.passiveIncome) *
          myUser.incomePercentageToSavings) /
        100,
      // });
    });

    // const users = await UserDB.find();
    // await Promise.all(
    //   users.map(async user => {
    //     await incrementUserBalance(user);
    //     await createIncomeTransaction(user);
    //     await getTotalExpensesAndSendReport(user);
    //     if (user.flatPrice !== 0 && user.flatSquareMeters !== 0) {
    //       sqmPrice = user.flatPrice / user.flatSquareMeters;
    //       user.giftsForUnpacking = Math.floor(
    //         user.balance / sqmPrice - user.giftsUnpacked,
    //       );
    //       await user.save();
    //     }
    //   }),
    // );
    //});
  });
  // });
};

module.exports = {
  updateInfo,
  //monthlyUpdatesUsersInfo
};
