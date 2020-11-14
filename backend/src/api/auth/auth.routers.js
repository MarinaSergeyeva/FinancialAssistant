const { Router } = require("express");
const authRouter = Router();
const Joi = require("joi");
const { validate } = require("../../utils.js/validate");

const AuthController = require("./auth.controller");
const { authorize } = require("../../utils.js/authorize");
const catchAsync = require('../../utils.js/catchAsync');



const registerScheme = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

authRouter.post(
  "/sign-up",
  validate(registerScheme),
  catchAsync(AuthController.createNewUser)
);

authRouter.post(
  "/sign-in",
  validate(loginScheme),
  catchAsync(AuthController.loginUser)
);

authRouter.post(
  "/logout",
  catchAsync(authorize),
  catchAsync(AuthController.logout)
);

module.exports = authRouter;