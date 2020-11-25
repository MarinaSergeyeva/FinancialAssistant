require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');

const expiresIn = 2 * 24 * 60 * 60;

describe('Gifts test suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('PUT /api/v1/gifts/unpack', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .put('/api/v1/gifts/unpack')
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
          username: 'Test5',
          email: 'test5@email.com',
          passwordHash: 'password_hash',
        });

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .put('/api/v1/gifts/unpack')
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
          username: 'Test5',
          email: 'test5@email.com',
          passwordHash: 'password_hash',
          flatPrice: 10000,
          giftsUnpacked: 2,
          giftsForUnpacking: 5,
        });

        const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .put('/api/v1/gifts/unpack')
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
          giftsForUnpacking: 4,
        });
      });
    });
  });
});
