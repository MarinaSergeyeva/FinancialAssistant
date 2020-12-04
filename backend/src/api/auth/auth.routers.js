const { Router } = require('express');
const passport = require('passport');
const Joi = require('joi');
const authRouter = Router();
const { validate, authorize, catchAsync } = require('../../utils');
const authController = require('./auth.controller');

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
  catchAsync(authController.createNewUser),
);

authRouter.post(
  '/sign-in',
  validate(loginSchema),
  catchAsync(authController.loginUser),
);

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  catchAsync(authController.authWithGoogle),
);

authRouter.delete(
  '/sign-out',
  catchAsync(authorize),
  catchAsync(authController.logoutUser),
);

module.exports = authRouter;
