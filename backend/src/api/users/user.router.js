const { Router } = require('express');
const {
  getCurrentUser,
  updateUsersController,
  getFlatStats,
} = require('./user.controller');
const { authorize, validate } = require('../../utils');
const Joi = require('joi');
const catchAsync = require('../../utils/catchAsync');
const usersRouter = Router();

const DataUserSchema = Joi.object({
  balance: Joi.number().required(),
  flatPrice: Joi.number().required(),
  flatSquareMeters: Joi.number().required(),
  totalSalary: Joi.number().required(),
  passiveIncome: Joi.number().required(),
  incomePercentageToSavings: Joi.number().required(),
});

usersRouter.get('/current', catchAsync(authorize), catchAsync(getCurrentUser));

usersRouter.get('/stats/flat', catchAsync(authorize), catchAsync(getFlatStats));

usersRouter.put(
  '/savings-info',
  authorize,
  validate(DataUserSchema),
  updateUsersController,
);

module.exports = usersRouter;
