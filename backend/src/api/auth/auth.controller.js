const bcrypt = require('bcrypt');
const UserModel = require('../users/user.model');
const AppError = require('../errors/appError');
const jwt = require('jsonwebtoken');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../../../src/.env') });

exports.createNewUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS),
  );
  const existUser = await UserModel.findOne({ email });

  if (existUser) {
    return next(new AppError('User with such email is exist', 409));
  }

  const newUser = await UserModel.create({
    username,
    email,
    password: passwordHash,
  });

  res.status(201).json({
    status: 'suсcess',
    createdUser: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const existUser = await UserModel.findOne({ email });

  if (!existUser) {
    return next(new AppError('Email is wrong', 404));
  }
  const validPassword = await bcrypt.compare(password, existUser.password);
  if (!validPassword) {
    return next(new AppError('Password is wrong', 403));
  }

  const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
    expiresIn: 2 * 24 * 60 * 60,
  });

  res.status(200).json({
    status: 'success',
    loginUser: 
    {
      user: {
      username: existUser.username,
      email: existUser.email,
      id: existUser._id,
      },
      token: token
      }
  });
};

exports.logout = async (req, res, next) => {
  const loggedUser = req.user;

  await UserModel.findByIdAndUpdate(loggedUser._id, { token: '' });
  req.user = null;
  res.status(204).end();
};
