import constants from '../constants/statsConstants';

const getStatsRequest = () => ({
  type: constants.GET_STATS_REQUEST,
});

const getStatsSuccess = stats => ({
  type: constants.GET_STATS_SUCCESS,
  payload: stats,
});

const getStatsError = error => ({
  type: constants.GET_STATS_ERROR,
  payload: error,
});

export default {
  getStatsRequest,
  getStatsSuccess,
  getStatsError,
};
