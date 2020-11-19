import userConstants from '../constants/userConstants';

const addUserRequest = () => ({
  type: userConstants.ADD_USER_REQUEST,
});

const addUserSuccess = user => ({
  type: userConstants.ADD_USER_SUCCESS,
  payload: user,
});

const addUserError = error => ({
  type: userConstants.ADD_USER_ERROR,
  payload: error,
});

const updateUserRequest = () => ({
  type: userConstants.UPDATE_USER_REQUEST,
});

const updateUserSuccess = user => ({
  type: userConstants.UPDATE_USER_SUCCESS,
  payload: user,
});

const updateUserError = error => ({
  type: userConstants.UPDATE_USER_ERROR,
  payload: error,
});

const getCurrentUserRequest = () => ({
  type: userConstants.GET_CURRENT_USER_REQUEST,
});

const getCurrentUserSuccess = () => ({
  type: userConstants.GET_CURRENT_USER_SUCCESS,
});

const getCurrentUserError = error => ({
  type: userConstants.GET_CURRENT_USER_ERROR,
  payload: error,
});

const changeTransactionSuccess = transaction => ({
  type: userConstants.CHANGE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const createTransactionRequest = () => ({
  type: userConstants.CREATE_TRANSACTION_REQUEST,
});

const createTransactionSuccess = transaction => ({
  type: userConstants.CREATE_TRANSACTION_SUCCESS,
  payload: transaction,
});

const createTransactionError = error => ({
  type: userConstants.CREATE_TRANSACTION_ERROR,
  payload: error,
});

export default {
  addUserRequest,
  addUserSuccess,
  addUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,

  changeTransactionSuccess,

  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
};
