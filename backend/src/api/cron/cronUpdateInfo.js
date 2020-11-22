const cron = require('node-cron');
const UserDB = require('../users/user.model');
const { TransactionModel } = require('../transactions/transaction.model');
const monthReportModel = require('./monthReport.model');
const { incrementUserBalance, createIncomeTransaction , getTotalExpenses, createMonthReport} = require('./cronUtils');

const updateInfo = () => {
  cron.schedule('*/10 * * * * *', async () => {
 // cron.schedule('0 0 1 * *', async () => {
    const users = await UserDB.find();

    //await TransactionModel.deleteMany({ type: "INCOME" });
    //await UserDB.deleteMany();
    // await UserDB.insertMany();
    //await monthReportModel.deleteMany();

    await Promise.all(
      users.map(async user => {
        await incrementUserBalance (user);
        await createIncomeTransaction (user);
        await getTotalExpenses(user);
        await createMonthReport(user);

        if (user.flatPrice !== 0 && user.flatSquareMeters !== 0) {
          sqmPrice = user.flatPrice / user.flatSquareMeters;
          user.giftsForUnpacking = Math.floor(
            income / sqmPrice - user.giftsUnpacked,
          );
          user.balance= user.balance-user.giftsForUnpacking*sqmPrice
          await user.save();
        }
      }),
    );
  });
};

module.exports = { updateInfo };
