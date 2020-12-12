import transactionConstants from '../constants/transactionConstants';

const expenseStats = (state = null, { type, payload }) => {
  switch (type) {
    case transactionConstants.GET_STATS_EXPENSE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default expenseStats;
