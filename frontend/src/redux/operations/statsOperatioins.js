import axios from 'axios';
import statsActions from '../actions/statsActions';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://localhost:8080';

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
const updateGifts = () => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;

  token.set(tokenNow);

  dispatch(statsActions.updateGiftsForUnpackingRequest());
  try {
    const res = await axios.put('api/v1/gifts/unpack');
    dispatch(statsActions.updateGiftsForUnpackingSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(statsActions.updateGiftsForUnpackingError(error.message));
  }
};

export default { getStatsFlat, updateGifts };
