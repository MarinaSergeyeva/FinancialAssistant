import transactionConstants from '../constants/transactionConstants';

const changeTransactionSuccess = transaction => ({
  type: transactionConstants.CHANGE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const cleanTransactionSuccess = () => ({
  type: transactionConstants.CLEAN_TRANSACTION_SUCCESS,
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

const resetTransactionsExpense = () => ({
  type: transactionConstants.RESET_MONTHLY_EXPENSE_TRANSACTIONS,
});

const getStatsExpense = payload => ({
  type: transactionConstants.GET_STATS_EXPENSE,
  payload,
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
  cleanTransactionSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,

  getTransactionsExpenseRequest,
  getTransactionsExpenseSuccess,
  getTransactionsExpenseError,

  resetTransactionsExpense,
  getStatsExpense,

  updateTransactionRequest,
  updateTransactionSuccess,
  updateTransactionError,
};
