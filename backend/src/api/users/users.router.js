const { Router } = require('express');
const { updateUsersController } = require('./users.controllers');
const usersRouter = Router();
const { authorize } = require('../../utils.js/authMiddleware');
const { validate } = require('../../utils.js/validate');
const Joi = require('joi');

const UserSchema = Joi.object({
  balance: Joi.number().required(),
  flatPrice: Joi.number().required(),
  flatSquareMeters: Joi.number().required(),
  totalSalary: Joi.number().required(),
  passiveIncome: Joi.number().required(),
  incomePercentageToSavings: Joi.number().required(),
});

usersRouter.put(
  '/savings-info',
  authorize,
  validate(UserSchema),
  updateUsersController,
);

module.exports = usersRouter;
