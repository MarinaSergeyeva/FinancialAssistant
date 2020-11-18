const { Router } = require('express');
const {
  getCurrentUser,
  updateUsersController,
  getFlatStats,
} = require('./user.controller');
const { authorize } = require('../../utils/authMiddleware');
const { validate } = require('../../utils/validate');
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

usersRouter.get('/current', authorize, getCurrentUser);

usersRouter.get('/stats/flat', authorize, catchAsync(getFlatStats));

usersRouter.put(
  '/savings-info',
  authorize,
  validate(DataUserSchema),
  updateUsersController,
);

module.exports = usersRouter;
