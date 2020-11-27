require('dotenv').config({ path: './.env' });
const cron = require('node-cron');
const mongoose = require('mongoose');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');

const { monthlyUpdatesUsersInfo } = require('../src/api/cron/cronUpdateInfo');
const UserModel = require('../src/api/users/user.model');
const monthReportModel = require('../src/api/cron/monthReport.model');
const {
  TransactionModel,
} = require('../src/api/transactions/transaction.model');

describe(' #monthlyUpdatesUsersInfo  updating  via cron tests suite', () => {
  let server;

  before(async () => {
    const authServer = new CrudServer();
    await authServer.startForTest();
    server = authServer.server;
  });
  describe('monthlyUpdatesUsersInfo #CronNNNN', () => {
    context('#update ', () => {
      let fakeTransaction, newUser, fakeMonthReport;
      before(async () => {
        newUser = await UserModel.create({
          username: 'test509userUpdate',
          email: 'test300Cron@email.com',
          passwordHash: '200password_hash',
          balance: 4,
          flatPrice: 3000000,
          flatSquareMeters: 110,
          totalSalary: 1,
          passiveIncome: 5,
          incomePercentageToSavings: 90,
        });
        console.log('newUser', newUser);
        // });
        fakeTransaction = await TransactionModel.create({
          amount: 1500,
          transactionDate: Date.now(),
          category: 'Развлечения',
          type: 'EXPENSE',
          userId: newUser._id,
        });

        await monthlyUpdatesUsersInfo();
      });
      console.log('newUser', newUser);
      after(async () => {
        await UserModel.deleteOne({ username: newUser.username });
        await TransactionModel.deleteOne({ _id: fakeTransaction._id });
        await monthReportModel.deleteOne({ userId: newUser._id });
      });

      it('should increment balance', async () => {
        const updatedUser = await UserModel.findById(newUser._id);
        assert.equal(
          updatedUser.balance,
          newUser.balance + newUser.totalSalary + newUser.passiveIncome,
        );
      });
    });
  });
});
