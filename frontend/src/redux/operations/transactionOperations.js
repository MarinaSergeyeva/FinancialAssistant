import axios from 'axios';
import transactionActions from '../actions/transactionActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getTransactionCategories = async () => {
  try {
    const res = await axios.get('/api/v1/transactions/categories');
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

// const changeTransaction = transaction => (dispatch, getState) => {
//   dispatch(transactionActions.changeTransactionSuccess(transaction));
// };

const createTransaction = transaction => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionActions.createTransactionRequest());
  try {
    const res = await axios.post('/api/v1/transactions', transaction);
    console.log(res.data, 'createTransaction');
    dispatch(transactionActions.createTransactionSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(transactionActions.createTransactionError(error));
  }
};

export default {
  createTransaction,
  // changeTransaction,
  getTransactionCategories,
};
