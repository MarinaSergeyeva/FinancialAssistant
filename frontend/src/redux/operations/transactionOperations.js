import axios from 'axios';
import transactionActions from '../actions/transactionActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

const createTransaction = transaction => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionActions.createTransactionRequest());
  try {
    const res = await axios.post('/api/v1/transactions', transaction);
    dispatch(transactionActions.createTransactionSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(transactionActions.createTransactionError(error));
  }
};

const getTransactionsExpense = (month, year, page = 1) => async (
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
      `/api/v1/transactions/expenses?month=${month}&year=${year}&page=${page}&limit=10`,
    );
    const {
      expenses,
      countPages,
      totalCount,
      totalAmount,
      categories,
    } = res.data;
    if (countPages) {
      dispatch(transactionActions.getTransactionsExpenseSuccess(expenses));
      const stats = { ...categories, totalAmount, totalCount, countPages };
      dispatch(transactionActions.getStatsExpense(stats));
    }
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
    await axios.patch(`/api/v1/transactions/${id}`, {
      comment,
      amount,
      category,
    });
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
