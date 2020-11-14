const { Router } = require('express');
const authRouter = Router();
const Joi = require('joi');
const { validate } = require('../../utils.js/validate');
const AuthController = require('./auth.controller');
const catchAsync = require('../../utils.js/catchAsync');

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

module.exports = authRouter;
