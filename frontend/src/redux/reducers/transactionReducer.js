import transactionConstants from '../constants/transactionConstants';

const initialState = {
  transaction: {
    category: '',
    amount: 0,
    comment: '',
  },
};

const transaction = (state = initialState.transaction, { type, payload }) => {
  switch (type) {
    case transactionConstants.CHANGE_TRANSACTION_SUCCESS:
      return { ...state, ...payload };

    case transactionConstants.CLEAN_TRANSACTION_SUCCESS:
      return { ...state, ...initialState.transaction };

    case transactionConstants.CREATE_TRANSACTION_SUCCESS:
      return { ...state, ...initialState.transaction };

    default:
      return state;
  }
};

export default transaction;
