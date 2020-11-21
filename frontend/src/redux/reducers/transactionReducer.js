import transactionConstants from '../constants/transactionConstants';

const initialState = {
  //   user: {
  //     info: {
  //       balance: 0,
  //       totalSalary: 0,
  //       passiveIncome: 0,
  //       incomePercentageToSavings: 0,
  //       flatPrice: 0,
  //       flatSquareMeters: 0,
  //     },
  transaction: {
    category: '',
    amount: 0,
    comment: '',
  },
  //   },
};

const transaction = (state = initialState.transaction, { type, payload }) => {
  switch (type) {
    case transactionConstants.CHANGE_TRANSACTION_SUCCESS:
      return { ...state, ...payload };

    case transactionConstants.CREATE_TRANSACTION_SUCCESS:
      const { amount, category, comment } = payload;
      return { ...state, amount, category, comment };

    default:
      return state;
  }
};

export default transaction;
