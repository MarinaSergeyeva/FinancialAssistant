// import { useSelector } from 'react-redux';
import axios from 'axios';
import userActions from '../actions/userActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getCurrentUser = () => async (dispatch, getState) => {
  // const isAuth = useSelector(state => authSelector.isAuthenticated(state));
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userActions.getCurrentUserRequest());
  try {
    console.log(axios);
    const res = await axios.get('/api/v1/users/current');
    console.log(res.data, 'CurrentUser');
    dispatch(userActions.getCurrentUserSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(userActions.getCurrentUserError(error));
  }
};

const updateUserInfo = info => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userActions.updateUserRequest());
  try {
    const result = await axios.put('/api/v1/users/savings-info', info);
    console.log('update User_Info', result.data);
    dispatch(userActions.updateUserSuccess(result.data));
  } catch (err) {
    console.log(err.message);
    dispatch(userActions.updateUserError(err));
  }
};

const createTransaction = transaction => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userActions.createTransactionRequest());
  try {
    const res = await axios.post('/api/v1/transactions', transaction);
    console.log(res.data, 'createTransaction');
    dispatch(userActions.createTransactionSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(userActions.createTransactionError(error));
  }
};

export default {
  getCurrentUser,
  updateUserInfo,
  createTransaction,
};
