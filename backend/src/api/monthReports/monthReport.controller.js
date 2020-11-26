const catchAsync = require('../../utils/catchAsync');
const MonthReportModel = require('../cron/monthReport.model');
const AppError = require('../errors/appError');

const getMonthReport = catchAsync(async (req, res, next) => {
  let { endMonth, endYear } = req.query;

  if (!req.user) {
    return next(new AppError('Not authorized', 401));
  }
  if (!req.user.flatPrice) {
    return next(new AppError('Initialize your saving stats, please', 403));
  }

  let startDate;
  let monthReports;
  const userId = req.user._id;

  const date = new Date();
  startDate = new Date(date.getFullYear() - 1, date.getMonth());
  const endDate = new Date(endYear, endMonth);

  monthReports = await MonthReportModel.aggregate([
    {
      $match: {
        userId,
        reportDate: { $gte: startDate, $lte: endDate },
      },
    },
  ]);

  return res.status(200).json({
    status: 'success',
    hi: monthReports.length,
    monthReports,
  });
});

module.exports = {
  getMonthReport,
};
