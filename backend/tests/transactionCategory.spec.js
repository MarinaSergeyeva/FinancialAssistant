require('dotenv').config({ path: '../.env' });
const jwt = require('jsonwebtoken');
const request = require('supertest');
const { assert, expect } = require('chai');
const { CrudServer } = require('../src/server');
const User = require('../src/api/users/user.model');

describe('transactions/categories test suite', () => {
  let server;
  before(async () => {
    const crudServer = new CrudServer();
    await crudServer.startForTest();
    server = crudServer.server;
  });

  describe('GET /transactions/categories', () => {
    context('wrong token provided', () => {
      let response;

      before(async () => {
        response = await request(server)
          .get('/api/v1/transactions/categories')
          .set('Authorization', 'Bearer wrong_token');
      });

      it('should return 401 error', () => {
        assert.equal(response.status, 401);
      });

      context('when good token was provided', () => {
        let response, userDoc, categories;

        before(async () => {
          userDoc = await User.create({
            username: 'Test1',
            email: 'test1@email.com',
            passwordHash: 'password_hash',
          });

          categories = [
            'Другое',
            'Развлечения',
            'Продукты',
            'Товары',
            'Транспорт',
            'ЖКХ',
          ];
          const expiresIn = 2 * 24 * 60 * 60;
          const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, {
            expiresIn,
          });
          userDoc.tokens.push({
            token,
            expires: Date.now() + expiresIn * 1000,
          });
          await userDoc.save();

          response = await request(server)
            .get('/api/v1/transactions/categories')
            .set('Authorization', `Bearer ${token}`);
        });

        after(async () => {
          await User.deleteOne({ _id: userDoc._id });
        });

        it('should return response with 200', () => {
          assert.equal(response.status, 200);
        });

        it('should return expected categories array', () => {
          expect(response.body.categories).to.include.members(categories);
        });
      });
    });
  });
});
