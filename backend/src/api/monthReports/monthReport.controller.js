const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');
const MonthReportModel = require('../cron/monthReport.model');

const getMonthReport = catchAsync(async (req, res, next) => {
  const { startMonth, startYear } = req.query;

  const date = new Date();

  const presentMonth = new Date(date.getFullYear(), date.getMonth() + 1);
  const presentMonth2 = new Date(startYear, startMonth);
  console.log('presentMonth', presentMonth);
  console.log('presentMonth2', presentMonth2);

  const endMonth = new Date(date.getFullYear() - 1, date.getMonth());
  console.log('endMonth', endMonth);

  const userId = req.user._id;
  const monthReports = await MonthReportModel.aggregate([
    {
      $match: {
        userId,
        // reportDate: { $lte: startMonth },
        reportDate: { $lte: presentMonth, $gte: endMonth },
        //   reportDate: { $gte: endMonth },
      },
    },
    // {
    //   $group: {
    //     _id: null,
    //     expenses: { $sum: '$amount' },
    //   },
    // },

    db.test.aggregate([
      {
        $group: {
          _id: {
            $let: {
              vars: {
                local_time: { $subtract: ['$date', 10800000] },
              },
              in: {
                $concat: [
                  { $substr: [{ $year: '$$local_time' }, 0, 4] },
                  '-',
                  { $substr: [{ $month: '$$local_time' }, 0, 2] },
                  '-',
                  { $substr: [{ $dayOfMonth: '$$local_time' }, 0, 2] },
                ],
              },
            },
          },
          count: { $sum: 1 },
        },
      },
    ]),
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
