const request = require('supertest');
const jwt = require('jsonwebtoken');
const { assert, expect } = require('chai');
require('dotenv').config({ path: './.env' });
const { CrudServer } = require('../src/server');
const User = require('../src/api/users/user.model');
const monthReport = require('../src/api/cron/monthReport.model');

const expiresIn = 2 * 24 * 60 * 60;
let report;

describe('getMonthReports test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /api/month-reports/annual?startMonth&startYear', () => {
    context('required query params are not provided', () => {
      let response, userDoc;

      before(async () => {
        userDoc = await User.create({
          username: 'test400getMonthReports',
          email: 'test400getMonthReports@email.com',
          passwordHash: 'password_hash',
        });
        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();
        console.log('userDoc', userDoc);

        response = await request(server)
          .get('/api/v1/month-reports/annual')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 400', () => {
        assert.equal(response.status, 400);
      });
    });

    context('user not authorized', () => {
      let response;

      before(async () => {
        response = await request(server)
          .get('/api/v1/month-reports/annual?startMonth=11&startYear=2020')
          .set('Authorization', '');
      });

      it('should return response with 401', () => {
        assert.equal(response.status, 401);
      });
    });
  });

  context('user have not initialized his saving stats yet', () => {
    let response, userDoc;

    before(async () => {
      userDoc = await User.create({
        username: 'test403getMonthReports',
        email: 'test403getMonthReports@email.com',
        passwordHash: 'password_hash',
        balance: 0,
        flatPrice: 0,
        flatSquareMeters: 0,
        totalSalary: 0,
        passiveIncome: 0,
        incomePercentageToSavings: 0,
      });

      const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
        expiresIn,
      });
      userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
      await userDoc.save();

      response = await request(server)
        .get('/api/v1/month-reports/annual?startMonth=11&startYear=2020')
        .set('Authorization', `Bearer ${token}`);
    });

    after(async () => {
      await User.deleteOne({ _id: userDoc._id });
    });

    it('should return 403 error', () => {
      assert.equal(response.status, 403);
    });
  });

  context('when everything ok', () => {
    let response, userDoc, fakeReport;

    before(async () => {
      userDoc = await User.create({
        username: 'test200getMonthReports',
        email: 'test200getMonthReports2@email.com',
        passwordHash: 'password_hash',
        balance: 1000,
        flatPrice: 40000,
        flatSquareMeters: 40,
        totalSalary: 900,
        passiveIncome: 400,
        incomePercentageToSavings: 5,
      });

      fakeReport = await monthReport.create({
        totalExpenses: 100,
        totalSavings: 103,
        totalIncome: 103,
        expectedSavingsPercentage: 3,
        expectedSavings: 3.09,
        userId: userDoc._id,
      });

      const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
        expiresIn,
      });
      userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
      await userDoc.save();

      response = await request(server)
        .get('/api/v1/month-reports/annual?startMonth=11&startYear=2020')
        .set('Authorization', `Bearer ${token}`);
    });

    after(async () => {
      await User.deleteOne({ _id: userDoc._id });
    });

    it('should return status 200', () => {
      assert.equal(response.status, 200);
    });

    it('should return expected response body', () => {
      expect(response.body.monthReports[0]).to.include({
        totalExpenses: fakeReport.totalExpenses,
        totalSavings: fakeReport.totalSavings,
        totalIncome: fakeReport.totalIncome,
        expectedSavingsPercentage: fakeReport.expectedSavingsPercentage,
        expectedSavings: fakeReport.expectedSavings,
      });
      assert.equal(response.body.monthReports[0].userId, userDoc._id);
    });
  });
});
