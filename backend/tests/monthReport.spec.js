const request = require('supertest');
const jwt = require('jsonwebtoken');
const { assert, expect } = require('chai');
require('dotenv').config({ path: '../.env' });
const { CrudServer } = require('../src/server');
const User = require('../src/api/users/user.model');

describe('getMonthReports test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /api/expenses/list?month&year', () => {
    context('required query params are not provided', () => {
      let response, userDoc, fakeUserBD;

      before(async () => {
        userDoc = await User.create({
          username: 'test400getMonthReports',
          email: 'test400getMonthReports@email.com',
          passwordHash: 'password_hash',
        });
        fakeUserBD = {
          balance: 'string',
          flatPrice: null,
          flatSquareMeters: 100,
          totalSalary: 70000,
          passiveIncome: 40000,
          incomePercentageToSavings: 50,
        };
        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
        userDoc.tokens.push(token);
        await userDoc.save();

        response = await request(server)
          .put('/api/v1/users/savings-info')
          .set('Authorization', `Bearer ${token}`)
          .send(fakeUserBD);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 400', () => {
        assert.equal(response.status, 400);
      });
    });
  });
});
