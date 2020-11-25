const jwt = require('jsonwebtoken');
const AppError = require('../api/errors/appError');
const userModel = require('../api/users/user.model');

exports.authorize = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return next(new AppError('Unauthorized', 401));
  }

  const userToken = authHeader.replace('Bearer ', '');
  let userId;
  try {
    userId = jwt.verify(userToken, process.env.JWT_SECRET).id;
  } catch (error) {
    next(new AppError('Unauthorized', 401));
  }
  const user = await userModel.findOne({ _id: userId });
  let idxToken;
  if (user) {
    idxToken = user.tokens.findIndex(({ token }) => token === userToken);
  }
  if (!user || idxToken === -1) {
    next(new AppError('Unauthorized', 401));
  }
  req.user = user;
  next();
};
