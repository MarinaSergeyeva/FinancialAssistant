const express = require('express');
const Joi = require('joi');
const monthReportRouter = express.Router();
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { validate } = require('../../utils/validate');
const { getMonthReport } = require('./monthReport.controller');

const validateQuerySchema = Joi.object({
  endMonth: Joi.number().required(),
  endYear: Joi.number().required(),
});

monthReportRouter.get(
  '/month-reports/annual',
  catchAsync(authorize),
  validate(validateQuerySchema, 'query'),
  getMonthReport,
);

module.exports = monthReportRouter;
