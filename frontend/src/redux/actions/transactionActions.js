import transactionConstants from '../constants/transactionConstants';

const changeTransactionSuccess = transaction => ({
  type: transactionConstants.CHANGE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const changeTransactionAmountSuccess = amount => ({
  type: transactionConstants.CHANGE_TRANSACTION_SUCCESS,
  payload: amount,
});

const createTransactionRequest = () => ({
  type: transactionConstants.CREATE_TRANSACTION_REQUEST,
});

const createTransactionSuccess = transaction => ({
  type: transactionConstants.CREATE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const createTransactionError = error => ({
  type: transactionConstants.CREATE_TRANSACTION_ERROR,
  payload: error,
});

const getTransactionsCatsRequest = () => ({
  type: transactionConstants.GET_TRANSACTIONS_CATS_REQUEST,
});

const getTransactionsCatsSuccess = payload => ({
  type: transactionConstants.GET_TRANSACTIONS_CATS_SUCCESS,
  payload,
});

const getTransactionsCatsError = error => ({
  type: transactionConstants.GET_TRANSACTIONS_CATS_ERROR,
  payload: error,
});

const getTransactionsExpenseRequest = () => ({
  type: transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST,
});
const getTransactionsExpenseSuccess = transaction => ({
  type: transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS,
  payload: transaction,
});
const getTransactionsExpenseError = error => ({
  type: transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST,
  payload: error,
});

const updateTransactionRequest = () => ({
  type: transactionConstants.UPDATE_TRANSACTION_REQUEST,
});

const updateTransactionSuccess = updatedExpense => ({
  type: transactionConstants.UPDATE_TRANSACTION_SUCCESS,
  payload: updatedExpense,
});

const updateTransactionError = error => ({
  type: transactionConstants.UPDATE_TRANSACTION_ERROR,
  payload: error,
});

export default {
  changeTransactionSuccess,
  changeTransactionAmountSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,

  getTransactionsCatsRequest,
  getTransactionsCatsSuccess,
  getTransactionsCatsError,
  getTransactionsExpenseRequest,
  getTransactionsExpenseSuccess,
  getTransactionsExpenseError,

  updateTransactionRequest,
  updateTransactionSuccess,
  updateTransactionError,
};
