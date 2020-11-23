const getGiftsForUnpacking = state => state.user.stats.giftsForUnpacking;

const getSavingsPercentage = state => state.user.stats.savingsPercentage;

const getSavingsForNextSquareMeterLeft = state =>
  state.user.stats.savingsForNextSquareMeterLeft;

export default {
  getGiftsForUnpacking,
  getSavingsPercentage,
  getSavingsForNextSquareMeterLeft,
};
