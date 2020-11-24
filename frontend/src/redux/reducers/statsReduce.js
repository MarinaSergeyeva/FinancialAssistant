const { default: statsConstants } = require('../constants/statsConstants');

const initialState = {
  stats: {
    savingsPercentage: 0,
    savingsValue: 0,
    savingsInSquareMeters: 0,
    totalSquareMeters: 0,
    monthsLeftToSaveForFlat: 0,
    savingsForNextSquareMeterLeft: 0,
    giftsUnpacked: 0,
    giftsForUnpacking: 0,
  },
};

const stats = (state = initialState.stats, { type, payload }) => {
  switch (type) {
    case statsConstants.GET_STATS_SUCCESS:
      return { ...state, ...payload };
    case statsConstants.UPDATE_UNPACK_GIFT_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default stats;
