const express = require('express');
const monthReportRouter = express.Router();
const Joi = require('joi');
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { validate } = require('../../utils/validate');
const { getMonthReport } = require('./monthReport.controller');

// const getMonthReportSchema = Joi.object({
//   type: Joi.string().required(),
//   comment: Joi.string().required(),
//   category: Joi.string().required(),
//   amount: Joi.number().required(),
//   transactionDate: Joi.string().required(),
//   // userId: Joi.string().required(),
//   createdAt: Joi.string().required(),
//   updatedAt: Joi.string().required(),
// });

monthReportRouter.get(
  '/month-reports/annual',
  catchAsync(authorize),
  // validate(getMonthReportSchema),
  getMonthReport,
);

module.exports = monthReportRouter;
