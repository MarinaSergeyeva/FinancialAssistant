const { Router } = require('express');
const { updateUsersController } = require('./users.controllers');
const usersRouter = Router();
const { authorize } = require('../../utils.js/authMiddleware');
const { validate } = require('../../utils.js/validate');
const Joi = require('joi');

const UserSchema = Joi.object({
  balance: Joi.number(),
  flatPrice: Joi.number(),
  flatSquareMeters: Joi.number(),
  totalSalary: Joi.number(),
  passiveIncome: Joi.number(),
  incomePercentageToSavings: Joi.number(),
});

usersRouter.put(
  '/savings-info',
  authorize,
  validate(UserSchema),
  updateUsersController,
);

module.exports = usersRouter;
