// import { useSelector } from 'react-redux';
import axios from 'axios';
import userActions from '../actions/userActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

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
    const res = await axios.get('/api/v1/users/current');
    dispatch(userActions.getCurrentUserSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(userActions.getCurrentUserError(error));
  }
};

export default {
  getCurrentUser,
};
