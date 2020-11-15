const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../api/users/user.model');
// const { updateUsersController } = require('../api/users/users.controllers');
const { DataUserSchema } = require('../api/users/users.router');

// it('Connection mongo Test', done => {
//   mongoose.connect(process.env.DB_URI, err => {
//     if (err) done(err);
//     done();
//   });
// });

it('Test dataUser validator schema without some field', done => {
  const fakeDataUserSchema = {
    balance: 4,
    flatPrice: 5,
    flatSquareMeters: 9,
    totalSalary: 70,
    passiveIncome: 'jlkjbn',
    incomePercentageToSavings: 100,
  };
  DataUserSchema.validateAsync(fakeDataUserSchema)
    .then(res => {
      if (res.err) {
        return;
      }
      done(new Error('All fields are required'));
    })
    .catch(err => done());
});

// it('Update user test with invalid data', done => {
//   const fakeDataUser = {
//     balance: 'io!!!!!!!!!!',
//     flatPrice: 1,
//     flatSquareMeters: 2,
//     totalSalary: 3,
//     passiveIncome: 4,
//     incomePercentageToSavings: 5,
//   };

//   User.findByIdAndUpdate('5fb1154163082e04bb3d5f1e', fakeDataUser, {
//     new: true,
//   })
//     .then(res => {
//       const data = {
//         balance: res.balance,
//         flatPrice: res.flatPrice,
//         flatSquareMeters: res.flatSquareMeters,
//         totalSalary: res.totalSalary,
//         passiveIncome: res.passiveIncome,
//         incomePercentageToSavings: res.incomePercentageToSavings,
//       };
//       // if (Object.values(data).some(value => typeof value !== 'number')) {
//       //   return;
//       // }
//       console.log(data);

//       if (typeof data.balance !== 'number')
//         // return;
//         done(new Error('invalid data'));
//     })
//     .catch(err => done());
// });
