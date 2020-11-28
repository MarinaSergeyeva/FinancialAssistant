import authAction from '../actions/authAction';
import axios from 'axios';
import { authSelector } from '../selectors';

axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const userRegistration = credentials => dispatch => {
  dispatch(authAction.registrationRequest());
  axios
    .post('/api/v1/auth/sign-up', credentials)
    .then(res => {
      console.log(res.data, 'Registration');
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch(err => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = credentials => dispatch => {
  dispatch(authAction.loginRequest());
  axios
    .post('/api/v1/auth/sign-in', credentials)
    .then(res => {
      token.set(res.data.token);
      dispatch(authAction.loginSuccess(res.data));
    })
    .catch(err => {
      console.log(err.message);
      dispatch(authAction.loginError(err));
    });
};

const userLogout = () => (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  axios.delete('/api/v1/auth/sign-out').then(res => {
    token.unSet();
    dispatch(authAction.logout());
  });
};

export default {
  token,
  userRegistration,
  userLogin,
  userLogout,
};
