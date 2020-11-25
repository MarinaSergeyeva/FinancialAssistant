const { Router } = require('express');
const authRouter = Router();
const Joi = require('joi');
const { validate, authorize, catchAsync } = require('../../utils');
const AuthController = require('./auth.controller');

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

authRouter.post(
  '/sign-up',
  validate(registerSchema),
  catchAsync(AuthController.createNewUser),
);

authRouter.post(
  '/sign-in',
  validate(loginSchema),
  catchAsync(AuthController.loginUser),
);

authRouter.delete(
  '/sign-out',
  catchAsync(authorize),
  catchAsync(AuthController.logoutUser),
);

module.exports = authRouter;
