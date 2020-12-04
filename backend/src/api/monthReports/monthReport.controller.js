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

  startDate = new Date(endYear - 1, endMonth);
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
    monthReports,
  });
});

module.exports = {
  getMonthReport,
};
