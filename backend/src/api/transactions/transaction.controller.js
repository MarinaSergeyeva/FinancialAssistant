const catchAsync = require("../../utils.js/catchAsync");
const TransactionModel = require('./transaction.model');



const addTransactionController = catchAsync(async (req, res, next) => {
    const { body } = req;
    const newTransaction = await TransactionModel.addTransaction(body);
    res.status(201).json({
        status: 'success',
        transaction: newTransaction,
    });
});

const getTransactionController = catchAsync(async (req, res) => {
    const transaction = await TransactionModel.getTransaction();
    res.json({
        status: 'success',
        results: transaction.length,
        transaction,
        
    });
});

module.exports = {
    addTransactionController,
    getTransactionController,
};