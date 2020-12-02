import authAction from '../actions/authAction';
import axios from 'axios';
import setError from '../actions/errorActions';
import { authSelector } from '../selectors';

axios.defaults.baseURL = 'https://financial-assistant-bc22.herokuapp.com';

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

  return axios
    .post('/api/v1/auth/sign-up', credentials)
    .then(res => {
      dispatch(authAction.registrationSuccess(res.data));
      dispatch(setError.setError({ kindOfErr: '', status: 0, statusText: '' }));
    })
    .catch(err => {
      dispatch(authAction.registrationError(err));
      return new Error(err);
    });
};

const userLogin = credentials => dispatch => {
  dispatch(authAction.loginRequest());
  return axios
    .post('/api/v1/auth/sign-in', credentials)
    .then(res => {
      token.set(res.data.token);
      dispatch(authAction.loginSuccess(res.data));
      dispatch(setError.setError({ kindOfErr: '', status: 0, statusText: '' }));
    })
    .catch(err => {
      dispatch(authAction.loginError(err));
      return new Error(err);
    });
};

const userLogout = () => (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  axios
    .delete('/api/v1/auth/sign-out')
    .then(() => {
      token.unSet();
      dispatch(authAction.logout());
    })
    .catch(err => {
      console.log(err.message);
      dispatch(authAction.loginError(err));
    });
};

export default {
  token,
  userRegistration,
  userLogin,
  userLogout,
};
