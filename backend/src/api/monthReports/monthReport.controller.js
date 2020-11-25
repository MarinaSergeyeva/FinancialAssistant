const catchAsync = require('../../utils/catchAsync');
const MonthReportModel = require('../cron/monthReport.model');
const AppError = require('../errors/appError');

const getMonthReport = catchAsync(async (req, res, next) => {
  let { startMonth, startYear } = req.query;

  if (Object.keys(req.query).length === 0) {
    return next(new AppError('Required query params are not provided', 400));
  }
  if (!req.user) {
    return next(new AppError('Not authorized', 401));
  }
  if (!req.user.flatPrice) {
    return next(new AppError('Initialize your saving stats, please', 403));
  }

  let endDate;
  let monthReports;
  const userId = req.user._id;

  if (startMonth === '' && startYear === '') {
    const date = new Date();
    req.query.startMonth = date.getMonth() + 1;
    req.query.startYear = date.getFullYear();
    const presentDate = new Date(req.query.startYear, req.query.startMonth);
    endDate = new Date(date.getFullYear() - 1, date.getMonth());

    return (monthReports = await MonthReportModel.aggregate([
      {
        $match: {
          userId,
          reportDate: { $lte: presentDate, $gte: endDate },
        },
      },
    ]));
  }
  const startDate = new Date(startYear, startMonth);
  endDate = new Date(startYear - 1, startMonth);

  monthReports = await MonthReportModel.aggregate([
    {
      $match: {
        userId,
        reportDate: { $lte: startDate, $gte: endDate },
      },
    },
  ]);
  return res.status(200).json({
    status: 'success',
    monthReports,
  });
});

module.exports = {
  getMonthReport,
};
