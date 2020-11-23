const { Router } = require('express');
const authRouter = Router();
const Joi = require('joi');
const { validate } = require('../../utils/validate');
const AuthController = require('./auth.controller');
const catchAsync = require('../../utils/catchAsync');
const passport =  require('passport');
const { sessionModel } = require('../session/session.model');
const uuid4  = require("uuid4");
const jwt = require('jsonwebtoken');


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
  passport.authenticate("google", { scope: ["email", "profile"] }),
  // {
  //   session: false,
  //   scope: [
  //     "https://www.googleapis.com/auth/userinfo.email",
  //     "https://www.googleapis.com/auth/plus.login",
  //   ],
  // }
);
authRouter.get(
  "/google/callback",

  passport.authenticate("google", { session: false }),
  // AuthController.createSession,
  ((req, res, next) => {
      console.log(req.user)

      const sessionToken =  jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: 2 * 24 * 60 * 60,
        });
     return res.redirect(`http://localhost:3000?token=${sessionToken}`)
          }),

       
  
  

  // passport.authenticate("google", { 
  // successRedirect: `http://localhost:3000?token=${uuid4()}`,
  // AuthController.createSession,
  // // `http://localhost:3000?token=${AuthController.createSession}`,
  // ((req, res, next) => {
  //   console.log(req.user)
  //   // const session =  sessionModel.createSession(user._id);
  //   const sessionToken =  jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  //       expiresIn: 2 * 24 * 60 * 60,
  //     });

  //    return `http://localhost:3000?token=${sessionToken}`
  //   //  console.log(await AuthController.createSession(), "FFFFFFFFFFFFFFFFFFFFFFF")
  //   }),
  // // failureRedirect: "http://localhost:8080/error",
   
  // }),
  
 
);

module.exports = authRouter;
