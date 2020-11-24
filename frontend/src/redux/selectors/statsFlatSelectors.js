const getGiftsForUnpacking = state => state.user.stats.giftsForUnpacking;

const getSavingsPercentage = state => state.user.stats.savingsPercentage;

const getSavingsValue = state => state.user.stats.savingsValue;

const getSavingsForNextSquareMeterLeft = state =>
  state.user.stats.savingsForNextSquareMeterLeft;

const getStatsFlat = state => state.user.stats;

export default {
  getGiftsForUnpacking,
  getSavingsPercentage,
  getSavingsValue,
  getSavingsForNextSquareMeterLeft,
  getStatsFlat,
};
