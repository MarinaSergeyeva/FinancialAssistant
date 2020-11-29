import axios from 'axios';
import transactionActions from '../actions/transactionActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://localhost:8080';

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
    // console.log(res.data, 'createTransaction');
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
    const month = date.getMonth();
    const year = date.getFullYear();
    const res = await axios.get(
      `/api/v1/transactions/expenses?month=${month}&year=${year}`,
    );
    console.log(res.data, 'getTransaction');
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

export default {
  createTransaction,
  getTransactionsCats,
};

const expensesCategories = {
  other: 'Другое',
  entertainment: 'Развлечения',
  food: 'Продукты',
  products: 'Товары',
  transport: 'Транспорт',
  services: 'ЖКХ',
};
