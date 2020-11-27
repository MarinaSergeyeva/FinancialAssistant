import userConstants from '../constants/userConstants';
import userInfoConstants from '../constants/userInfoConstants';

const initialState = {
  info: {
    balance: 0,
    totalSalary: 0,
    passiveIncome: 0,
    incomePercentageToSavings: 0,
    flatPrice: 0,
    flatSquareMeters: 0,
    monthBalance: 0,
  },
};

const info = (state = initialState.info, { type, payload }) => {
  switch (type) {
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return { ...state, ...payload };

    case userInfoConstants.UPDATE_USER_INFO_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default info;
