const bcrypt = require('bcrypt');
const UserModel = require('../users/user.model');
const AppError = require('../errors/appError');
const jwt = require('jsonwebtoken');
const { createToken } = require('../../utils/createToken');

exports.createNewUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return next(new AppError('User with such email is exist', 409));
  }

  const passwordHash = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS),
  );

  const newUser = await UserModel.create({
    username,
    email,
    passwordHash,
  });

  return res.status(201).json({
    id: newUser._id,
    username: newUser.username,
    email: newUser.email,
  });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    return next(new AppError('Email is wrong', 404));
  }
  const validPassword = await bcrypt.compare(
    password,
    existingUser.passwordHash,
  );
  if (!validPassword) {
    return next(new AppError('Password is wrong', 403));
  }
  const expiresIn = 2 * 24 * 60 * 60;
  const token = createToken(existingUser, expiresIn);

  existingUser.tokens.push({ token, expires: Date.now() + expiresIn });
  existingUser.tokens = removeExpiredTokens(existingUser.tokens);
  await existingUser.save();
  return res.status(200).json({
    user: {
      username: existingUser.username,
      email: existingUser.email,
      id: existingUser._id,
    },
    token: token,
  });
};

exports.logoutUser = async (req, res, next) => {
  const tokenUser = req.token;
  await UserModel.updateOne(
    { _id: req.user._id },
    { $pull: { tokens: { token: tokenUser } } },
  );
  req.user = null;
  return res.sendStatus(204);
};

function removeExpiredTokens(array) {
  return array.filter(item => item.expires > Date.now());
}

exports.AuthGoogle_FB = async (req, res, next) => {
  const existingUser = req.user;
  const expiresIn = 2 * 24 * 60 * 60;
  const token = createToken(existingUser, expiresIn);

  existingUser.tokens.push({ token, expires: Date.now() + expiresIn });
  existingUser.tokens = removeExpiredTokens(existingUser.tokens);
  await existingUser.save();

  return res.redirect(`${process.env.ALLOWED_ORIGIN}?token=${token}`);
};
