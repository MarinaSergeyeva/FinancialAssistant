const catchAsync = require('../../utils/catchAsync');
const MonthReportModel = require('../cron/monthReport.model');

const getMonthReport = catchAsync(async (req, res, next) => {
  console.log('Hi from getReport');
  console.log('req.query', req.query);
  const { startMonth, startYear } = req.query;
  console.log('startMonth', startMonth);
  console.log('startYear', startYear);
  const userId = req.user._id;
  const monthReports = await MonthReportModel.find({ userId });
  console.log('monthReports.length', monthReports.length);
  res.status(201).json({
    status: 'success',
    monthReports,
  });
});

module.exports = {
  getMonthReport,
};
