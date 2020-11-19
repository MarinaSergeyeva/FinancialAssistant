require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');

describe('CurrentUser test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /users/stats/flat', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .get('/api/v1/users/stats/flat')
          .set('Authorization', 'Bearer bad_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });
    context('when stats not initialized', () => {
      let response, userDoc;

      before(async () => {
        userDoc = await User.create({
          username: 'Test2',
          email: 'test2@email.com',
          passwordHash: 'password_hash',
        });

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
        userDoc.tokens.push(token);
        await userDoc.save();

        response = await request(server)
          .get('/api/v1/users/stats/flat')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return 403 error', () => {
        assert.equal(response.status, 403);
      });
    });

    context('when good token was provided', () => {
      let response, userDoc;

      before(async () => {
        userDoc = await User.create({
          username: 'Test3',
          email: 'test3@email.com',
          passwordHash: 'password_hash',
          balance: 1000,
          flatPrice: 10000,
          flatSquareMeters: 40,
          totalSalary: 800,
          passiveIncome: 150,
          incomePercentageToSavings: 5,
          giftsForUnpacking: 0,
        });

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
        userDoc.tokens.push(token);

        await userDoc.save();

        response = await request(server)
          .get('/api/v1/users/stats/flat')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 200', () => {
        assert.equal(response.status, 200);
      });
      it('should return expected response body', () => {
        expect(response.body).to.include({
          savingsPercentage: 0.1,
          savingsValue: 1000,
          savingsInSquareMeters: 4,
          totalSquareMeters: 40,
          monthsLeftToSaveForFlat: 190,
          savingsForNextSquareMeterLeft: 0,
          giftsForUnpacking: 0,
        });
      });
    });
  });
});
