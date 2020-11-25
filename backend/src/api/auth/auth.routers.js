const { Router } = require('express');
const authRouter = Router();
const Joi = require('joi');
const { validate } = require('../../utils/validate');
const AuthController = require('./auth.controller');
const catchAsync = require('../../utils/catchAsync');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userModel = require('../users/user.model');

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
  (req, res, next) => {
    // const user = req.user;
    //  const existingUser = await userModel.findById( user._id );

    // const sessionToken = jwt.sign(
    
    //   { id: user._id },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: 2 * 24 * 60 * 60,
    //   },
    // );

//     // existingUser.tokens.push(sessionToken);
//     // await existingUser.save();


//     return res.redirect(`http://localhost:3000?token=${sessionToken}`);
  },
 `http://localhost:3000/notfound`
  
);

module.exports = authRouter;
