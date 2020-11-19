import userConstants from '../constants/userConstants';

const addUserRequest = () => ({
  type: userConstants.ADD_USER_REQUEST,
});

const addUserSuccess = () => ({
  type: userConstants.ADD_USER_SUCCESS,
});

const addUserError = () => ({
  type: userConstants.ADD_USER_ERROR,
});

const updateUserRequest = () => ({
  type: userConstants.UPDATE_USER_REQUEST,
});

const updateUserSuccess = () => ({
  type: userConstants.UPDATE_USER_SUCCESS,
});

const updateUserError = () => ({
  type: userConstants.UPDATE_USER_ERROR,
});

const getCurrentUserRequest = () => ({
  type: userConstants.GET_CURRENT_USER_REQUEST,
});

const getCurrentUserSuccess = () => ({
  type: userConstants.GET_CURRENT_USER_SUCCESS,
});

const getCurrentUserError = () => ({
  type: userConstants.GET_CURRENT_USER_ERROR,
});

const changeTransactionRequest = () => ({
  type: userConstants.CHANGE_TRANSACTION_REQUEST,
});

const changeTransactionSuccess = () => ({
  type: userConstants.CHANGE_TRANSACTION_SUCCESS,
});

const changeTransactionError = () => ({
  type: userConstants.CHANGE_TRANSACTION_ERROR,
});

const createTransactionRequest = () => ({
  type: userConstants.CREATE_TRANSACTION_REQUEST,
});

const createTransactionSuccess = () => ({
  type: userConstants.CREATE_TRANSACTION_SUCCESS,
});

const createTransactionError = () => ({
  type: userConstants.CREATE_TRANSACTION_ERROR,
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
  changeTransactionRequest,
  changeTransactionSuccess,
  changeTransactionError,
  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
};
