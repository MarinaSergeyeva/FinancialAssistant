import userInfoConstants from '../constants/userInfoConstants';

const updateUserInfoRequest = () => ({
  type: userInfoConstants.UPDATE_USER_REQUEST,
});

const updateUserInfoSuccess = user => ({
  type: userInfoConstants.UPDATE_USER_SUCCESS,
  payload: user,
});

const updateUserInfoError = error => ({
  type: userInfoConstants.UPDATE_USER_ERROR,
  payload: error,
});

export default {
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoError,
};
