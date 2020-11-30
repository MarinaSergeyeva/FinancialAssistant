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

const countPercentage = state => {
  const result =
    Math.floor((state.giftsUnpacked / state.totalSquareMeters) * 100) / 100;

  return result;
};

const stats = (state = initialState.stats, { type, payload }) => {
  switch (type) {
    case statsConstants.GET_STATS_SUCCESS:
      return { ...state, ...payload };
    case statsConstants.UPDATE_UNPACK_GIFT_SUCCESS:
      return {
        ...state,
        ...{
          ...payload,
          savingsInSquareMeters: state.savingsInSquareMeters + 1,
          savingsPercentage: countPercentage(state),
        },
      };

    default:
      return state;
  }
};

export default stats;
