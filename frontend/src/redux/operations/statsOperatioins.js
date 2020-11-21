import axios from 'axios';
import statsActions from '../actions/statsActions';
import { authSelector } from '../selectors';

axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getStatsFlat = () => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
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
