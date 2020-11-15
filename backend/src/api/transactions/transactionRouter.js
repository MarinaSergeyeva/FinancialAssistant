const express = require('express');
// const { validate } = require('../../utils.js/validate');
const transactionRouter = express.Router()
const { addTransactionController, } = require('./transaction.controller');



transactionRouter.post('/', /* проверка на токен */ addTransactionController);

module.exports = transactionRouter;