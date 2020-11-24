const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');
const MonthReportModel = require('../cron/monthReport.model');

const getMonthReport = catchAsync(async (req, res, next) => {
  const { startMonth, startYear } = req.query;

  const date = new Date();

  const presentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  console.log('presentMonth', presentMonth);
  const presentMonthInMS = Date.parse(presentMonth);
  console.log('presentMonthInMS', presentMonthInMS);
  const endMonth = new Date(date.getFullYear() - 1, date.getMonth() - 12, 1);
  console.log('endMonth', endMonth);

  let now = new Date();
  const previousMonth = now.getMonth();

  const userId = req.user._id;
  const monthReports = await MonthReportModel.aggregate([
    {
      $match: {
        userId,
        // reportDate: { $lte: startMonth },
        reportDate: { $lte: presentMonth },
        $eq: [{ $month: '$reportDate' }, previousMonth],

        //   reportDate: { $gte: endMonth },
      },
    },
    // {
    //   $group: {
    //     _id: null,
    //     expenses: { $sum: '$amount' },
    //   },
    // },
  ]);
  console.log('monthReports.length', monthReports.length);
  res.status(201).json({
    status: 'success',
    monthReports,
  });
});

module.exports = {
  getMonthReport,
};
