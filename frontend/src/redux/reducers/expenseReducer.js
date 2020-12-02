import transactionConstants from '../constants/transactionConstants';

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS:
      return [...state, ...payload];
    case transactionConstants.UPDATE_TRANSACTION_SUCCESS:
      return state.map(item =>
        item._id === payload._id ? { ...item, ...payload } : item,
      );

    default:
      return state;
  }
};

export default expenses;
