require('dotenv').config({ path: './.env' });
const { CrudServer } = require('../src/server');
const { assert, expect } = require('chai');
const UserModel = require('../src/api/users/user.model');
const monthReportModel = require('../src/api/cron/monthReport.model');
const {
  TransactionModel,
} = require('../src/api/transactions/transaction.model');
const { monthlyUpdatesUsersInfo } = require('../src/api/cron/cronUpdateInfo');

describe('#monthlyUpdatingUsersInfo  updating  via cron tests suite', () => {
  let server;

  before(async () => {
    const authServer = new CrudServer();
    await authServer.startForTest();
    server = authServer.server;
  });
  describe('#monthlyUpdatingUsersInfo ', () => {
    context('#update ', () => {
      let fakeTransaction, newUser;
      before(async () => {
        newUser = await UserModel.create({
          username: 'Alexander',
          email: 'Alexander@gmail.com',
          passwordHash: 'Alexander_hash',
          balance: 4,
          flatPrice: 3000000,
          flatSquareMeters: 110,
          totalSalary: 1,
          passiveIncome: 5,
          incomePercentageToSavings: 90,
        });

        fakeTransaction = await TransactionModel.create({
          amount: 1500,
          transactionDate: Date.parse(new Date(2020, 9, 15)),
          category: 'Развлечения',
          type: 'EXPENSE',
          userId: newUser._id,
        });

        await monthlyUpdatesUsersInfo();
      });

      after(async () => {
        await UserModel.deleteOne({ email: newUser.email });
        await TransactionModel.deleteMany({ userId: newUser._id });
        await monthReportModel.deleteOne({ userId: newUser._id });
      });

      it('should increment balance', async () => {
        const updatedUser = await UserModel.findOne({ _id: newUser._id });
        assert.equal(
          updatedUser.balance,
          newUser.totalSalary + newUser.passiveIncome + newUser.balance,
        );
      });
      it('should create transaction', async () => {
        const newTransaction = await TransactionModel.findOne({
          userId: newUser._id,
          type: 'INCOME',
        });
        assert.equal(
          newTransaction.amount,
          newUser.totalSalary + newUser.passiveIncome,
        );
      });
      it('should month report ', async () => {
        const newMonthReport = await monthReportModel.findOne({
          userId: newUser._id,
        });

        expect(newMonthReport).to.include({
          totalExpenses: fakeTransaction.amount, //
          totalSavings:
            newUser.totalSalary +
            newUser.passiveIncome -
            fakeTransaction.amount,
          totalIncome: newUser.totalSalary + newUser.passiveIncome,
          expectedSavingsPercentage: newUser.incomePercentageToSavings,
          expectedSavings:
            ((newUser.totalSalary + newUser.passiveIncome) *
              newUser.incomePercentageToSavings) /
            100,
        });
      });
    });
  });
});
