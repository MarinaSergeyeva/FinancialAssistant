const UserDB = require('./user.model');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../errors/appError');

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

const updateUsersController = catchAsync(async (req, res, next) => {
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
});

//==== Flat Stats

const calculateStats = user => {
  const {
    balance,
    flatPrice,
    flatSquareMeters,
    totalSalary,
    passiveIncome,
    incomePercentageToSavings,
  } = user;

  const savingsPercentage = Math.round((balance / flatPrice) * 100) / 100;

  const savingsValue = balance;

  const savingsInSquareMeters = Math.floor(
    savingsValue / (flatPrice / flatSquareMeters),
  );

  const totalSquareMeters = flatSquareMeters;

  const monthsLeftToSaveForFlat =
    (flatPrice - balance) /
    ((totalSalary + passiveIncome) * (incomePercentageToSavings / 100));

  const savingsForNextSquareMeterLeft =
    balance - savingsInSquareMeters * (flatPrice / flatSquareMeters);

  const giftsForUnpacking = 0;

  const flatStats = {
    savingsPercentage,
    savingsValue,
    savingsInSquareMeters,
    totalSquareMeters,
    monthsLeftToSaveForFlat,
    savingsForNextSquareMeterLeft,
    giftsForUnpacking,
  };
  return flatStats;
};

const getFlatStats = (req, res, next) => {
  const { user } = req;

  const { flatPrice } = user;
  if (!flatPrice) {
    return next(new AppError('Saving stats not initialized', 403));
  }

  const stats = calculateStats(user);

  res.status(201).json(stats);
};

module.exports = { getCurrentUser, updateUsersController, getFlatStats };
