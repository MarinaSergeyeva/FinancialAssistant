const cron = require('node-cron');
const UserDB = require('../users/user.model');
const {
  incrementUserBalance,
  createIncomeTransaction,
  getTotalExpensesAndSendReport,
} = require('./cronUtils');

const monthlyUpdatesUsersInfo = async () => {
  const users = await UserDB.find();

  await Promise.all(
    users.map(async user => {
      await incrementUserBalance(user);
      await createIncomeTransaction(user);
      await getTotalExpensesAndSendReport(user);

      if (user.flatPrice !== 0 && user.flatSquareMeters !== 0) {
        sqmPrice = user.flatPrice / user.flatSquareMeters;
        user.giftsForUnpacking = Math.floor(
          user.balance / sqmPrice - user.giftsUnpacked,
        );
        await user.save();
      }
    }),
  );
};
const updateInfo = () => {
  cron.schedule(
    '0 0 1 * *',
    monthlyUpdatesUsersInfo, //
  );
};

module.exports = { updateInfo, monthlyUpdatesUsersInfo };
