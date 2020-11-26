require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');

const expiresIn = 2 * 24 * 60 * 60;

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

    context('Body validation', () => {
      let response, userDoc, fakeTransaction;
      before(async () => {
        userDoc = await User.create({
          username: 'TestKostya',
          email: 'testTestTestTest@email.com',
          passwordHash: 'password_hash',
        });

        fakeTransaction = {
          amount: 'NotANumber',
          transactionDate: 3434723423426,
          type: '',
          category: '',
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .post('/api/v1/transactions')
          .set('Authorization', `Bearer ${token}`)
          .send(fakeTransaction);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 400', () => {
        assert.equal(response.status, 400);
      });
    });

    context('when token was provided', () => {
      let response, userDoc, fakeTransaction;
      const testDate = Date.now();

      before(async () => {
        userDoc = await User.create({
          username: 'TestKostya',
          email: 'testTestTestTest@email.com',
          passwordHash: 'password_hash',
        });

        fakeTransaction = {
          amount: 1500,
          transactionDate: testDate,
          category: 'Развлечения',
          type: 'EXPENSE',
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .post('/api/v1/transactions')
          .set('Authorization', `Bearer ${token}`)
          .send(fakeTransaction);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 201', () => {
        assert.equal(response.status, 201);
      });

      it('should return expected response body', () => {
        expect(response.body.transaction).to.include({
          amount: fakeTransaction.amount,
          category: fakeTransaction.category,
          transactionDate: new Date(testDate).toISOString(),
          type: 'EXPENSE',
        });
        assert.equal(response.body.transaction.userId, userDoc._id);
      });
    });
  });
});
