import constants from '../constants/authConstants';

const registrationRequest = () => ({
  type: constants.REGISTER_REQUEST,
});

const registrationSuccess = credential => ({
  type: constants.REGISTER_SUCCESS,
  payload: credential,
});

const registrationError = error => ({
  type: constants.REGISTER_ERROR,
  payload: error,
});

const loginRequest = () => ({
  type: constants.LOGIN_REQUEST,
});

const loginSuccess = credential => ({
  type: constants.LOGIN_SUCCESS,
  payload: credential,
});

const loginError = error => ({
  type: constants.LOGIN_ERROR,
  payload: error,
});

const logoutRequest = () => ({
  type: constants.LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS,
});

const logoutError = () => ({
  type: constants.LOGOUT_ERROR,
});

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
};
