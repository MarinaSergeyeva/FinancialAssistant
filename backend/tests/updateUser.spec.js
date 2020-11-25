const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');
require('dotenv').config({ path: './.env' });

const expiresIn = 2 * 24 * 60 * 60;

describe('UpdateUserInfo test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('PUT /users/savings-info', () => {
    context('when req.body validation failed', () => {
      let response, userDoc, fakeUserBD;
      before(async () => {
        userDoc = await User.create({
          username: 'test400userUpdate',
          email: 'test400userUpdate@email.com',
          passwordHash: 'password_hash',
        });
        fakeUserBD = {
          balance: 'string',
          flatPrice: null,
          flatSquareMeters: 80,
          totalSalary: 50000,
          passiveIncome: 30000,
          incomePercentageToSavings: 70,
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
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

    context('when user is not authorized', () => {
      let response;

      before(async () => {
        response = await request(server)
          .put('/api/v1/users/savings-info')
          .set('Authorization', 'Bearer bad_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when user balance already initialized', () => {
      let response, userDoc, fakeUserBD;

      before(async () => {
        userDoc = await User.create({
          username: 'test409userUpdate',
          email: 'test409userUpdate@email.com',
          passwordHash: 'password_hash',
          balance: 100000,
        });

        fakeUserBD = {
          balance: 400000,
          flatPrice: 3000000,
          flatSquareMeters: 110,
          totalSalary: 100000,
          passiveIncome: 50000,
          incomePercentageToSavings: 90,
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .put('/api/v1/users/savings-info')
          .set('Authorization', `Bearer ${token}`)
          .send(fakeUserBD);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return 409 error', () => {
        assert.equal(response.status, 409);
      });
    });

    context('when everything ok', () => {
      let response, userDoc, fakeUserBD;

      before(async () => {
        userDoc = await User.create({
          username: 'test200userUpdate',
          email: 'test200userUpdate@email.com',
          passwordHash: 'password_hash',
        });

        fakeUserBD = {
          balance: 400000,
          flatPrice: 3000000,
          flatSquareMeters: 80,
          totalSalary: 50000,
          passiveIncome: 30000,
          incomePercentageToSavings: 70,
        };

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .put('/api/v1/users/savings-info')
          .set('Authorization', `Bearer ${token}`)
          .send(fakeUserBD);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 200', () => {
        assert.equal(response.status, 200);
      });

      it('should return expected response body', () => {
        expect(response.body).to.include({
          balance: fakeUserBD.balance,
          flatPrice: fakeUserBD.flatPrice,
          flatSquareMeters: fakeUserBD.flatSquareMeters,
          totalSalary: fakeUserBD.totalSalary,
          passiveIncome: fakeUserBD.passiveIncome,
          incomePercentageToSavings: fakeUserBD.incomePercentageToSavings,
        });
        assert.containsAllKeys(response.body, 'id');
      });
    });
  });
});
