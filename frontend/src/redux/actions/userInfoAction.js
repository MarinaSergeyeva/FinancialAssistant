import userInfoConstants from '../constants/userInfoConstants';

const updateUserInfoRequest = () => ({
  type: userInfoConstants.UPDATE_USER_INFO_REQUEST,
});

const updateUserInfoSuccess = user => ({
  type: userInfoConstants.UPDATE_USER_INFO_SUCCESS,
  payload: user,
});

const updateUserInfoError = error => ({
  type: userInfoConstants.UPDATE_USER_INFO_ERROR,
  payload: error,
});

export default {
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoError,
};
