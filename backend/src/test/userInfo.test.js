const sinon = require('sinon');
const should = require('should');
// const chai = require('chai');
// const { assert } = require('chai');
// const path = require('path');
// require('dotenv').config();
// require("dotenv").config({ path: path.join(__dirname, "../.env") });
// const jwt = require('jsonwebtoken');
const userModel = require('../api/users/user.model');
const { updateUsersController } = require('../api/users/users.controllers');
const { authorize } = require('../utils.js/authMiddleware');
// const { DataUserSchema } = require('../api/users/users.router');

describe('unit test suite', () => {
  describe('#checkUser', () => {
    let sandbox;
    let findByIdAndUpdateStub;
    before(async () => {
      sandbox = sinon.createSandbox();
      findByIdAndUpdateStub = sinon.stub(userModel, 'findByIdAndUpdate');
      const fakeDataUser = {
        balance: 2,
        flatPrice: 7,
        flatSquareMeters: 2,
        totalSalary: 3,
        passiveIncome: 4,
        incomePercentageToSavings: 5,
      };
      await userModel.findByIdAndUpdate(
        '5fb054d7fba0f422044f7bb0',
        fakeDataUser,
        {
          new: true,
        },
      );
    });
    after(() => {
      sandbox.restore();
    });
  });
});

// ---------------
// context('when jwt token is invalid', () => {
//   const req = { headers: { authorization: 'invalid_token' } };

//   let res, sandbox, next;

//   before(async () => {
//     sandbox = sinon.createSandbox();
//     res = { status: sandbox.stub(), send: sandbox.stub() };
//     res.status.returns(res);
//     next = sandbox.stub();
//     findByIdStub = sandbox.stub(userModel, 'findByIdAndUpdate');
//     await authorize(req, res, next);
//   });

//   after(() => {
//     sandbox.restore();
//   });

//   it('should call res.status once', () => {
//     sinon.assert.calledOnce(res.status);
//     sinon.assert.calledWithExactly(res.status, 401);
//   });

//   it('should call res.send once', () => {
//     sinon.assert.calledOnce(res.send);
//   });

//   it('should not call userModel.findById', () => {
//     sinon.assert.notCalled(
//       userModel.findByIdAndUpdate('5fb054d7fba0f422044f7bb0', {
//         balance: 2,
//         flatPrice: 7,
//         flatSquareMeters: 2,
//         totalSalary: 3,
//         passiveIncome: 4,
//         incomePercentageToSavings: 5,
//       }),
//     );
//   });

//   it('should not call next', () => {
//     sinon.assert.notCalled(next);
//   });
// });
