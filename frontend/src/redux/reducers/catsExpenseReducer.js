import transactionConstants from '../constants/transactionConstants';

const categories = (state = null, { type, payload }) => {
  switch (type) {
    case transactionConstants.GET_TRANSACTIONS_CATS_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default categories;
