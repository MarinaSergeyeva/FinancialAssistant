import axios from 'axios';
import categoriesActions from '../actions/categoriesActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://localhost:8080';

const getCategories = () => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(categoriesActions.categoriesRequest());
  try {
    const res = await axios.get('/api/v1/transactions/categories');
    dispatch(categoriesActions.categoriesSuccess(res.data.categories));
  } catch (error) {
    console.log(error.message);
    dispatch(categoriesActions.categoriesError());
  }
};

export default {
  getCategories,
};
