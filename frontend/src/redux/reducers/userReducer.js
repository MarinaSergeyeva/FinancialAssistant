import { combineReducers } from 'redux';
import userConstants from '../constants/userConstants';

const initialState = {
  user: {
    info: {
      balance: 100,
      totalSalary: 200,
      passiveIncome: 150,
      incomePercentageToSavings: 3,
      flatPrice: 30000,
      flatSquareMeters: 200,
    },
    transaction: {
      category: '',
      amount: 0,
      comment: '',
    },
  },
};

const info = (state = initialState.info, { type, payload }) => {
  switch (type) {
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default info;
