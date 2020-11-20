const { Router } = require('express');
const authRouter = Router();
const Joi = require('joi');
const { validate } = require('../../utils/validate');
const AuthController = require('./auth.controller');
const catchAsync = require('../../utils/catchAsync');
const passport =  require('passport');



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
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
authRouter.get(
  "/google/callback",

  passport.authenticate("google", { session: false }),
  AuthController.createSession,

  // passport.authenticate("google", {
    
    // successRedirect: "http://localhost:8080/success",
    // failureRedirect: "http://localhost:8080/error",
   
  // }),

  (req, res, next) => {
  console.log(req.user)
  }
);

module.exports = authRouter;
