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
  let server, userDoc, transactionDoc, newTransaction;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
    userDoc = await User.create({
      username: 'Test1',
      email: 'test1@email.com',
      passwordHash: 'password_hash',
    });
    transactionDoc = await TransactionModel.create({
      amount: 1000,
      type: 'EXPENSE',
      transactionDate: Date.now(),
      userId: userDoc._id,
    });
    newTransaction = {
      amount: 1500,
      category: 'Развлечения',
      comment: 'Поход в театр',
    };
  });

  after(async () => {
    await User.deleteOne({ _id: userDoc._id });
    await TransactionModel.deleteOne({ _id: transactionDoc._id });
  });

  describe('PATCH /transactions', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .patch(`/api/v1/transactions/${transactionDoc._id}`)
          .set('Authorization', 'Bearer bad_token')
          .send(newTransaction);
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when good token was provided', () => {
      let response;

      before(async () => {
        const expiresIn = 2 * 24 * 60 * 60;
        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn * 1000 });
        await userDoc.save();

        response = await request(server)
          .patch(`/api/v1/transactions/${transactionDoc._id}`)
          .set('Authorization', `Bearer ${token}`)
          .send(newTransaction);
      });

      it('should return response with 200', () => {
        assert.equal(response.status, 200);
      });

      it('should return expected response body', () => {
        expect(response.body).to.include({
          amount: newTransaction.amount,
          category: newTransaction.category,
          comment: newTransaction.comment,
        });
      });
    });
  });
});
