import axios from 'axios';
import transactionActions from '../actions/transactionActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

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

const getTransactionsExpense = (month, year, page) => async (
  dispatch,
  getState,
) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionActions.getTransactionsExpenseRequest());
  try {
    const res = await axios.get(
      `/api/v1/transactions/expenses?month=${month}&year=${year}${
        page ? `&page=${page}&limit=10` : ''
      }&page=2&limit=5`,
    );
    dispatch(transactionActions.getTransactionsExpenseSuccess(res.data));
  } catch (error) {
    dispatch(transactionActions.getTransactionsExpenseError(error));
  }
};

const updateTransactionExpense = (updatedInfo, id) => async (
  dispatch,
  getState,
) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionActions.updateTransactionRequest());
  try {
    const { comment, amount, category } = updatedInfo;
    await axios.patch(
      `https://financial-assistant-bc22.herokuapp.com/api/v1/transactions/${id}`,
      { comment, amount, category },
    );
    dispatch(transactionActions.updateTransactionSuccess(updatedInfo));
  } catch (error) {
    dispatch(transactionActions.updateTransactionError(error));
  }
};

export default {
  createTransaction,
  getTransactionsExpense,
  updateTransactionExpense,
};
