import axios from 'axios';
import userActions from '../actions/userActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

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
  createTransaction,
};
