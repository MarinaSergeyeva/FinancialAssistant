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

  describe('GET /users/current', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .get('/api/v1/users/current')
          .set('Authorization', 'Bearer bad_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when good token was provided', () => {
      let response, userDoc;

      before(async () => {
        userDoc = await User.create({
          username: 'Test',
          email: 'test@email.com',
          passwordHash: 'password_hash',
        });

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
        userDoc.tokens.push(token);
        await userDoc.save();

        response = await request(server)
          .get('/api/v1/users/current')
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
          username: userDoc.username,
          email: userDoc.email,
          balance: userDoc.balance,
          flatPrice: userDoc.flatPrice,
          flatSquareMeters: userDoc.flatSquareMeters,
          totalSalary: userDoc.totalSalary,
          passiveIncome: userDoc.passiveIncome,
          incomePercentageToSavings: userDoc.incomePercentageToSavings,
        });
        expect(response.body).to.not.have.key('passwordHash');
        assert.containsAllKeys(response.body, 'id');
      });
    });
  });
});
