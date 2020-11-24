const express = require('express');
const monthReportRouter = express.Router();
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { getMonthReport } = require('./monthReport.controller');

monthReportRouter.get(
  '/month-reports/annual',
  catchAsync(authorize),
  getMonthReport,
);

module.exports = monthReportRouter;
