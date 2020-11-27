const { Router } = require('express');
const passport = require('passport');
const Joi = require('joi');
const authRouter = Router();
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

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  catchAsync(AuthController.AuthGoogle_FB),
);

authRouter.get('/facebook',
passport.authenticate('facebook', { scope: ['email', 'profile'] }));

authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook',{ session: false }),
  catchAsync(AuthController.AuthGoogle_FB),
);

authRouter.delete(
  '/sign-out',
  catchAsync(authorize),
  catchAsync(AuthController.logoutUser),
);

module.exports = authRouter;
