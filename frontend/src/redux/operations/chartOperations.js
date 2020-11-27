//import reportAction from '../actions/chartActions';
import axios from 'axios';
import authSelector from '../selectors/authSelector';
import { token } from './authOperations';
import chartActions from '../actions/chartActions';
axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getMonthReport = ({ endMonth, endYear }) => async (
  dispatch,
  getState,
) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;
  token.set(tokenNow);
  dispatch(chartActions.getReportRequest());
  try {
    //
    const res = await axios.get(
      `api/v1/month-reports/annual?endMonth=${endMonth}&endYear=${endYear}`,
    );
    console.log('res.data', res.data);
    dispatch(chartActions.getReportSuccess(res.data));
  } catch (error) {
    dispatch(chartActions.getReportError(error));
  }
};
export default { getMonthReport };
