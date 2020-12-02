import constants from '../constants/chartConstants';

const getReportRequest = () => ({
  type: constants.GET_REPORT_REQUEST,
});
const getReportSuccess = credential => ({
  type: constants.GET_REPORT_SUCCESS,
  payload: credential,
});
const getReportError = error => ({
  type: constants.GET_REPORT_REQUEST,
  payload: error,
});

export default {
  getReportRequest,
  getReportSuccess,
  getReportError,
};
