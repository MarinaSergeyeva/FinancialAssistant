import constants from '../constants/calculatorConstants';

const initialState = {
  calculator: 0,
};

const calculator = (state = initialState.calculator, { type, payload }) => {
  switch (type) {
    case constants.CALC_RESULT_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default calculator;
