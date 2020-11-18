require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const TransactionModel = require('../src/api/transactions/transaction.model');
const User = require('../src/api/users/user.model');

describe('addTransactions test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('POST /transactions', () => {
    context('wrong token provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .post('/api/v1/transactions')
          .set('Authorization', 'Bearer wrong_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when token was provided', () => {
      let response, userDoc, fakeTransaction
      before(async () => {  
        userDoc = await User.create({
          username: 'Test',
          email: 'test@email.com',
          passwordHash: 'password_hash',
        });

        fakeTransaction = {
          amount: 1500,
          transactionDate: 3434723423426,
          type: 'INCOME',
          category: 'Развлечения',
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
        userDoc.tokens.push(token);
        await userDoc.save();

        response = await request(server)
          .post('/api/v1/transactions')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await TransactionModel.deleteOne({ _id: fakeTransaction._id });
      });

      it('should return response with 201', () => {
        assert.equal(response.status, 201);
      });
    });
  });
});
