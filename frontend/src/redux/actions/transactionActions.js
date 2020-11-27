import transactionConstants from '../constants/transactionConstants';

const changeTransactionSuccess = transaction => ({
  type: transactionConstants.CHANGE_TRANSACTION_SUCCESS,
  payload: transaction,
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

export default {
  changeTransactionSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,

  getTransactionsExpenseRequest,
  getTransactionsExpenseSuccess,
  getTransactionsExpenseError,
};
