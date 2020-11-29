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

// const getTransactionsRequest = () => ({
//   type: transactionConstants.GET_TRANSACTIONS_REQUEST,
// });

// const getTransactionsSuccess = () => ({
//   type: transactionConstants.GET_TRANSACTIONS_SUCCESS,
//   payload,
// });

// const getTransactionsError = error => ({
//   type: transactionConstants.GET_TRANSACTIONS_ERROR,
//   payload: error,
// });

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

export default {
  changeTransactionSuccess,
  changeTransactionAmountSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,

  // getTransactionsRequest,
  // getTransactionsSuccess,
  // getTransactionsError,

  getTransactionsCatsRequest,
  getTransactionsCatsSuccess,
  getTransactionsCatsError,
};
