const UserDB = require('./user.model');
const catchAsync = require('../../utils.js/catchAsync');

const updateUsersController = catchAsync(async (req, res, next) => {
  if (req.user && req.body) {
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
  }
  res.status(401).json({ message: 'Unauthorized' });
});

module.exports = { updateUsersController };
