const catchAsync = require("../../utils.js/catchAsync");
const TransactionModel = require('./transaction.model');


const addTransactionController = catchAsync(async (req, res, next) => {
    console.log(req.body)
    const { body } = req;
    const newTransaction = await TransactionModel.addTransaction(body);
    res.status(201).json({
        status: 'success',
        transaction: newTransaction,
    });
});

module.exports = {
    addTransactionController,
};