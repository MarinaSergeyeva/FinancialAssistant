import userActions from '../actions/userActions';
import axios from 'axios';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://localhost:8080';

const getCurrentUser = () => async (dispatch, getState) => {
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

const createTransaction = () => async dispatch => {
  dispatch(userActions.createTransactionRequest());
  try {
    const res = await axios.post('/api/v1/transaction');
    console.log(res.data, 'createTransaction');
    dispatch(userActions.createTransactionSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(userActions.createTransactionError(error));
  }
};

export default {
  getCurrentUser,
  createTransaction,
};
