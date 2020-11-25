const bcrypt = require('bcrypt');
const UserModel = require('../users/user.model');
const AppError = require('../errors/appError');
const jwt = require('jsonwebtoken');

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
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn,
  });
  existingUser.tokens.push({ token, expires: Date.now() + expiresIn });
  const indexesExpiredTokens = [];
  existingUser.tokens.forEach((token, idx) => {
    if (token.expires < Date.now()) {
      indexesExpiredTokens.push(idx);
    }
  });
  indexesExpiredTokens.forEach(idx => existingUser.tokens.splice(idx, 1));
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
  const tokenUser = req.get('Authorization').replace('Bearer ', '');
  const user = await UserModel.findById(req.user._id);
  const idxToken = user.tokens.findIndex(({ token }) => token === tokenUser);
  user.tokens.splice(idxToken, 1);
  await user.save();
  req.user = null;
  return res.sendStatus(204);
};
