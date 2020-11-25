require('dotenv').config({ path: './.env' });
const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const User = require('../src/api/users/user.model');

describe('Test for request from auth suite', () => {
  let server;

  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('DELETE /auth/sign-out', () => {
    context('when bad token was provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .delete('/api/v1/auth/sign-out')
          .set('Authorization', 'Bearer bad_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });
    });

    context('when good token was provided', () => {
      let response, userDoc, token;

      before(async () => {
        userDoc = await User.create({
          username: 'Test1',
          email: 'test1@email.com',
          passwordHash: 'password_hash',
        });
        const expiresIn = 2 * 24 * 60 * 60;
        token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
          expiresIn,
        });
        userDoc.tokens.push({ token, expires: Date.now() + expiresIn });
        await userDoc.save();

        response = await request(server)
          .delete('/api/v1/auth/sign-out')
          .set('Authorization', `Bearer ${token}`);
      });

      after(async () => {
        await User.deleteOne({ _id: userDoc._id });
      });

      it('should return response with 204', () => {
        assert.equal(response.status, 204);
      });

      it('should remove corresponding token from user document', async () => {
        const updatedUser = await User.findById(userDoc._id);
        updatedUser.tokens.forEach(item =>
          expect(item).to.not.have.property('token', token),
        );
      });
    });
  });
});
