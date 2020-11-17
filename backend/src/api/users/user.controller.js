const UserDB = require('./user.model');
const catchAsync = require('../../utils/catchAsync');

const getCurrentUser = (req, res, next) => {
  return res.status(200).json({
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    balance: req.user.balance,
    flatPrice: req.user.flatPrice,
    flatSquareMeters: req.user.flatSquareMeters,
    totalSalary: req.user.totalSalary,
    passiveIncome: req.user.passiveIncome,
    incomePercentageToSavings: req.user.incomePercentageToSavings,
  });
};

const updateUsersController = async (req, res, next) => {
  try {
    const updatedUser = await UserDB.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    return res.send({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      balance: updatedUser.balance,
      flatPrice: updatedUser.flatPrice,
      flatSquareMeters: updatedUser.flatSquareMeters,
      totalSalary: updatedUser.totalSalary,
      passiveIncome: updatedUser.passiveIncome,
      incomePercentageToSavings: updatedUser.incomePercentageToSavings,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getCurrentUser, updateUsersController };
