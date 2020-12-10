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

const getTransactionsCats = date => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(transactionActions.getTransactionsCatsRequest());
  try {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const res = await axios.get(
      `/api/v1/transactions/expenses?month=${month}&year=${year}`,
    );
    const expenses = {
      other: 0,
      food: 0,
      products: 0,
      entertainment: 0,
      transport: 0,
      services: 0,
      totalAmount: 0,
    };

    res.data.forEach(item => {
      for (let cat in expensesCategories) {
        if (expensesCategories[cat] === item.category) {
          expenses[cat] += item.amount;
        }
      }
      expenses.totalAmount += item.amount;
    });
    dispatch(transactionActions.getTransactionsCatsSuccess(expenses));
  } catch (error) {
    console.log(error.message);
    dispatch(transactionActions.getTransactionsCatsError(error));
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
        page ? `&page=${page}&limit=10` : null
      }`,
    );
    dispatch(transactionActions.getTransactionsExpenseSuccess(res.data));
    return res.data.length;
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
  getTransactionsCats,
  getTransactionsExpense,
  updateTransactionExpense,
};

const expensesCategories = {
  other: 'Другое',
  entertainment: 'Развлечения',
  food: 'Продукты',
  products: 'Товары',
  transport: 'Транспорт',
  services: 'ЖКХ',
};
