import constants from '../constants/calculatorConstants';

const calculator = (state = 0, { type, payload }) => {
  switch (type) {
    case constants.CALC_RESULT_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default calculator;
