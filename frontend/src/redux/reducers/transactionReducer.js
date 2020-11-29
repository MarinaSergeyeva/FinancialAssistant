import transactionConstants from '../constants/transactionConstants';

const initialState = {
  transaction: {
    category: '',
    amount: '',
    comment: '',
  },
  // transactions: [],
};

const transaction = (state = initialState.transaction, { type, payload }) => {
  switch (type) {
    case transactionConstants.CHANGE_TRANSACTION_SUCCESS:
      return { ...state, ...payload };

    case transactionConstants.CLEAN_TRANSACTION_SUCCESS:
      return { ...state, ...initialState.transaction };

    case transactionConstants.CREATE_TRANSACTION_SUCCESS:
      // const { amount, category, comment } = payload;
      return { ...state, ...initialState.transaction };

    // case transactionConstants.GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS:
    //   return { ...state, ...initialState.transactions };

    default:
      return state;
  }
};

export default transaction;
