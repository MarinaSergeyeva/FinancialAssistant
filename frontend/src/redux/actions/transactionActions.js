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

export default {
  changeTransactionSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
};
