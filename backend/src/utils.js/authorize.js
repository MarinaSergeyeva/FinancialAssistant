const jwt = require("jsonwebtoken");
const UserModel = require("../api/users/user.model");
const AppError = require("../api/errors/appError");

exports.authorize = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return next(new AppError("Unauthorized", 401));
  }

  const token = authHeader.replace("Bearer ", "");
  let userId;
  try {
    userId = jwt.verify(token, process.env.JWT_SECRET).id;
  } catch (error) {
    next(new AppError("Unauthorized", 401));
  }
  const user = await UserModel.findById(userId);
  if (!user) {
    next(new AppError("Unauthorized", 401));
  }
  req.user = user;
  next();
};