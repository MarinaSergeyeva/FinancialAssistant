const UserDB = require('./user.model');
const { TransactionModel } = require('../transactions/transaction.model');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../errors/appError');

const getCurrentUser = async (req, res, next) => {
  const currentExpenses = await TransactionModel.getCurrentMonthExpenses(
    req.user._id,
  );
  const currentBalance =
    req.user.totalSalary + req.user.passiveIncome - currentExpenses;

  const response = {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    balance: req.user.balance,
    flatPrice: req.user.flatPrice,
    flatSquareMeters: req.user.flatSquareMeters,
    totalSalary: req.user.totalSalary,
    passiveIncome: req.user.passiveIncome,
    incomePercentageToSavings: req.user.incomePercentageToSavings,
    monthBalance: currentBalance,
  };
  response.picture = req.user.picture ? req.user.picture : 'none';

  return res.status(200).json(response);
};

const updateUsersController = catchAsync(async (req, res, next) => {
  const { body } = req;
  const { balance, flatPrice, flatSquareMeters } = body;
  const giftsForUnpacking = Math.floor(
    balance / (flatPrice / flatSquareMeters),
  );
  if (req.user.balance > 0 && req.body.balance !== req.user.balance) {
    return res
      .status(409)
      .json({ message: 'user balance already initialized' });
  }
  const updatedUser = await UserDB.findByIdAndUpdate(
    req.user._id,
    { ...req.body, giftsForUnpacking },
    {
      new: true,
    },
  );

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
    giftsForUnpacking: updatedUser.giftsForUnpacking,
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
    giftsUnpacked,
    giftsForUnpacking,
  } = user;

  const savingsPercentage =
    Math.round((giftsUnpacked / flatSquareMeters) * 100) / 100;

  const savingsValue = balance;

  const savingsInSquareMeters = giftsUnpacked;

  const totalSquareMeters = flatSquareMeters;

  const monthsLeftToSaveForFlat = Math.ceil(
    (flatPrice - balance) /
      ((totalSalary + passiveIncome) * (incomePercentageToSavings / 100)),
  );

  const savingsForNextSquareMeterLeft =
    flatPrice / flatSquareMeters -
    (balance -
      (giftsUnpacked + giftsForUnpacking) * (flatPrice / flatSquareMeters));

  const flatStats = {
    savingsPercentage,
    savingsValue,
    savingsInSquareMeters,
    totalSquareMeters,
    monthsLeftToSaveForFlat,
    savingsForNextSquareMeterLeft,
    giftsUnpacked,
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

  return res.status(200).json(stats);
};

module.exports = { getCurrentUser, updateUsersController, getFlatStats };
