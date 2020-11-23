import axios from 'axios';
import statsActions from '../actions/statsActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getStatsFlat = () => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;

  token.set(tokenNow);

  dispatch(statsActions.getStatsRequest());
  try {
    const res = await axios.get('/api/v1/users/stats/flat');
    dispatch(statsActions.getStatsSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(statsActions.getStatsError());
  }
};

export default getStatsFlat;
