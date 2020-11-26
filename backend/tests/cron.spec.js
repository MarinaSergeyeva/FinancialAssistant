require('dotenv').config({ path: './.env' });
const cron = require('node-cron');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const { CrudServer } = require('../src/server');
const request = require('supertest');
const { assert, expect } = require('chai');
const faker = require('faker');
const UserModel = require('../src/api/users/user.model');
const {
  incrementUserBalance,
  createIncomeTransaction,
  getTotalExpensesAndSendReport,
} = require('../src/api/cron/cronUtils');
mongoose.Promise = global.Promise;

function fakeCron() {
  return 1;
}

describe(' #CRON Monthly updating  info via cron tests suite', () => {
  let server;

  before(async () => {
    const authServer = new CrudServer();
    await authServer.startForTest();
    server = authServer.server;
  });

  const existingEmail = faker.internet.email();
  let newUser, users;

  before(async () => {
    newUser = await UserModel.create({
      username: faker.name.firstName(),
      email: existingEmail,
      passwordHash: faker.random.words(),
    });
    //
  });
  after(async () => {
    await UserModel.deleteOne({ _id: newUser._id });
  });

  describe('#CRON getAllUsers', () => {
    before(async () => {
      users = await UserModel.find({ existingEmail });
      it('should get all users', () => {
        assert.isDefined(user);
      });
    });
    context('#CRON increment users balance', () => {
      before(async () => {
        result = await incrementUserBalance(users);
        it('should increment user balance', () => {
          assert.isDefined(result);
        });
      });
    });
    context('#CRON create income transactions', () => {
      before(async () => {
        result = await createIncomeTransaction(users);
        it('should create income transactions', () => {
          assert.isDefined(result);
        });
      });
    });
    context('#CRON increment users balance', () => {
      before(async () => {
        result = await getTotalExpensesAndSendReport(users);
        it('should increment users balance', () => {
          assert.isDefined(result);
        });
      });
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
//   before(async done => {
//     await mongoose.connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//     });
//     await mongoose.connection
//       .once('open', () => {
//         done();
//       })
//       .on('error', error => console.log('Your Error', error));
//   });

//it(' #CRON should create user', () => {
//     newUser
//       .save()
//       .then(() => {
//         assert(!newUser.isNew);
//       })
//       .catch(() => {
//         console.log('error');
//       });
//   });
