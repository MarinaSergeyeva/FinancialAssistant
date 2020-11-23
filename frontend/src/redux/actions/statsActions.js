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

const updateGiftsForUnpackingRequest = () => ({
  type: constants.UPDATE_UNPACK_GIFT_REQUEST,
});

const updateGiftsForUnpackingSuccess = giftsLeft => ({
  type: constants.UPDATE_UNPACK_GIFT_SUCCESS,
  payload: giftsLeft,
});

const updateGiftsForUnpackingError = error => ({
  type: constants.UPDATE_UNPACK_GIFT_ERROR,
  payload: error,
});

export default {
  getStatsRequest,
  getStatsSuccess,
  getStatsError,
  updateGiftsForUnpackingRequest,
  updateGiftsForUnpackingSuccess,
  updateGiftsForUnpackingError,
};
