import constants from '../constants/authConstants';

const registrationRequest = () => ({
  type: constants.REGISTER_REQUEST,
});

const registrationSuccess = credential => {
  console.log(credential);
 return {
  type: constants.REGISTER_SUCCESS,
  payload: credential,
}
};

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

const logout = () => ({
  type: constants.LOGOUT,
});

export default {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logout,
};