require('dotenv').config({ path: './.env' });
const cron = require('node-cron');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const faker = require('faker');
const UserModel = require('../src/api/users/user.model');
mongoose.Promise = global.Promise;
function fakeCron() {
  return 1;
}

describe('Monthly updating  info via cron tests suite', () => {
  let server;
  before(dasync one => {
   await  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
    });
    mongoose.connection
      .once('open', () => {
        done();
      })
      .on('error', error => console.log('Your Error', error));
  });
  describe('getAllUsers', () => {
    it('get all users from db', () => {
      assert(true);
    });
  });
  //         ))
  //   beforeEach(async done => {
  //     newUser = await UserModel.create({
  //       username: faker.name.firstName(),
  //       email: existingEmail,
  //       passwordHash: faker.random.words(),
  //     });
  //     newUser.save().then(() => done());
  //   });
  //   it('Create user for test', async done => {
  //     await UserModel.find(newUser._id).then(user => {
  //       assert(user !== null);
  //       done();
  //     });
  //   });
  //   context('Cron run ', () => {
  //     let result;

  // it('should run once', () => {
  //   console.log('first test');
  //   const result = cron.schedule('', () => {
  //     console.log('in cron');
  //     return fakeCron();
  //   });
  //   expect(result).to.equal(1);
  //   //   assert.strictEqual(result, 1);
  // });
  //   });

  context('Increment User balance', () => {});
  context('Create income  transaction', () => {});
  context('Get total expenses', () => {});
  context('Count  user gifts for unpacking', () => {});
});
