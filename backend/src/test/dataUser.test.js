const mongoose = require('mongoose');
require('dotenv').config();
const sinon = require('sinon');
const User = require('../api/users/user.model');
// const { updateUsersController } = require('../api/users/users.controllers');
const { DataUserSchema } = require('../api/users/users.router');

it('Connection mongo Test', done => {
  mongoose.connect(process.env.DB_URI, err => {
    if (err) done(err);
    done();
  });
});

it('Test dataUser validator schema without some field', async () => {
  try {
    const fakeDataUserSchema = {
      balance: 4,
      flatPrice: 5,
      // flatSquareMeters: 9,
      totalSalary: 70,
      passiveIncome: 9,
      incomePercentageToSavings: 100,
    };
    await DataUserSchema.validateAsync(fakeDataUserSchema);
    if (fakeDataUserSchema.balance) throw new Error('All fields are required');
  } catch (err) {
    console.log(err);
  }
});

it('Update user test with invalid data', done => {
  const fakeDataUser = {
    balance: 2,
    flatPrice: 7,
    flatSquareMeters: 2,
    totalSalary: 3,
    passiveIncome: 4,
    incomePercentageToSavings: 5,
  };

  User.findByIdAndUpdate('5fb054d7fba0f422044f7bb0', fakeDataUser, {
    new: true,
  })
    .then(res => {
      const data = {
        balance: res.balance,
        flatPrice: res.flatPrice,
        flatSquareMeters: res.flatSquareMeters,
        totalSalary: res.totalSalary,
        passiveIncome: res.passiveIncome,
        incomePercentageToSavings: res.incomePercentageToSavings,
      };
      if (Object.values(data).some(value => typeof value !== 'number')) {
        return;
      }
      done(new Error('invalid data'));
    })
    .catch(err => done());
});
