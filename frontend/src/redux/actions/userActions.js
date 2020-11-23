import userConstants from '../constants/userConstants';

const getCurrentUserRequest = () => ({
  type: userConstants.GET_CURRENT_USER_REQUEST,
});

const getCurrentUserSuccess = user => ({
  type: userConstants.GET_CURRENT_USER_SUCCESS,
  payload: user,
});

const getCurrentUserError = error => ({
  type: userConstants.GET_CURRENT_USER_ERROR,
  payload: error,
});

export default {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
