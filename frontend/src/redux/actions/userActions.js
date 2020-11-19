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
  type: userConstants.ADD_USER_REQUEST,
});

const getCurrentUserSuccess = () => ({
  type: userConstants.ADD_USER_SUCCESS,
});

const getCurrentUserError = () => ({
  type: userConstants.ADD_USER_ERROR,
});

const createTransactionRequest = () => ({
  type: userConstants.ADD_USER_REQUEST,
});

const createTransactionSuccess = () => ({
  type: userConstants.ADD_USER_SUCCESS,
});

const createTransactionError = () => ({
  type: userConstants.ADD_USER_ERROR,
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
  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
};
