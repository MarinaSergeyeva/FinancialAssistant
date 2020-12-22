import transactionConstants from '../constants/transactionConstants';

const expenseStats = (state = null, { type, payload }) => {
  switch (type) {
    case transactionConstants.GET_STATS_EXPENSE_SUCCESS:
      return { ...state, ...payload };
    case transactionConstants.RESET_MONTHLY_EXPENSE_TRANSACTIONS:
      return null;
    default:
      return state;
  }
};

export default expenseStats;
