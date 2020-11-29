//import reportAction from '../actions/chartActions';
import axios from 'axios';
import authSelector from '../selectors/authSelector';
import { token } from './authOperations';
import chartActions from '../actions/chartActions';
axios.defaults.baseURL = 'http://financial-assistant-bc22.herokuapp.com';

const getMonthReport = startDate => async (dispatch, getState) => {
  const tokenNow = authSelector.isAuthenticated(getState());
  if (!tokenNow) return;
  token.set(tokenNow);

  dispatch(chartActions.getReportRequest());
  try {
    const data = new Date(startDate);
    startDate.getFullYear();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();
    const res = await axios.get(
      //`api/v1/month-reports/annual?endMonth=${endMonth}&endYear=${endYear}`,
      `api/v1/month-reports/annual?endMonth=${month}&endYear=${year}`,
    );
    console.log('year  and month  =====>', month, year);
    dispatch(chartActions.getReportSuccess(res.data.monthReports));
    console.log('res.data.monthReport', res.data.monthReports);
  } catch (error) {
    dispatch(chartActions.getReportError(error));
  }
};
export default { getMonthReport };
