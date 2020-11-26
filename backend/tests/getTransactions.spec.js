require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');
const {
  TransactionModel,
} = require('../src/api/transactions/transaction.model');

describe('CurrentUser test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /transactions/expenses', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .get('/api/v1/transactions/expenses?month=10&year=2020')
          .set('Authorization', 'Bearer bad_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when good token was provided', () => {
      let response, userDoc, transactionDoc, testDate;

      before(async () => {
        userDoc = await User.create({
          username: 'Test1',
          email: 'test1@email.com',
          passwordHash: 'password_hash',
        });
        const expiresIn = 2 * 24 * 60 * 60;
        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();
        testDate = new Date(2020, 9, 15);
        console.log('Date', testDate);
        console.log('ms', Date.parse(testDate));
        transactionDoc = await TransactionModel.create({
          amount: 1000,
          type: 'EXPENSE',
          transactionDate: Date.parse(testDate),
          userId: userDoc._id,
        });

        response = await request(server)
          .get('/api/v1/transactions/expenses?month=10&year=2020')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
        await TransactionModel.deleteOne({ _id: transactionDoc._id });
      });

      it('should return response with 200', () => {
        assert.equal(response.status, 200);
      });

      it('should return expected response body', () => {
        expect(response.body[0]).to.include({
          amount: transactionDoc.amount,
          category: transactionDoc.category,
          comment: transactionDoc.comment,
          transactionDate: testDate.toISOString(),
        });
      });
    });
  });
});
