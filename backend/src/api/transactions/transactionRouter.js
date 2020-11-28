const express = require('express');
const transactionRouter = express.Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const transactionController = require('./transaction.controller');
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { validate } = require('../../utils/validate');

const addTransactionSchema = Joi.object({
  amount: Joi.number().required(),
  transactionDate: Joi.number().required(),
  type: Joi.string().required(),
  comment: Joi.string(),
  category: Joi.string(),
});

const schemaId = Joi.object({
  transactionId: Joi.objectId(),
});

const updateTransactionSchema = Joi.object({
  amount: Joi.number(),
  transactionDate: Joi.number(),
  category: Joi.string().empty(''),
  comment: Joi.string().empty(''),
});

transactionRouter.post(
  '/',
  catchAsync(authorize),
  validate(addTransactionSchema),
  catchAsync(transactionController.createTransaction),
);

transactionRouter.get(
  '/categories',
  catchAsync(authorize),
  transactionController.getTransactionCategories,
);

transactionRouter.get(
  '/expenses',
  catchAsync(authorize),
  catchAsync(transactionController.getListExpensesMonth),
);

transactionRouter.patch(
  '/:transactionId',
  catchAsync(authorize),
  validate(schemaId, 'params'),
  validate(updateTransactionSchema),
  catchAsync(transactionController.updateTransaction),
);

module.exports = transactionRouter;
