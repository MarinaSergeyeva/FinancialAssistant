import constants from '../constants/calculatorConstants';

const calcResultRequest = () => ({
  type: constants.CALC_RESULT_REQUEST,
});

const calcResultSuccess = result => ({
  type: constants.CALC_RESULT_SUCCESS,
  payload: result,
});

const calcResultError = error => ({
  type: constants.CALC_RESULT_ERROR,
  payload: error,
});

const calcReset = () => ({
  type: constants.CALC_RESET,
});

export default {
  calcResultRequest,
  calcResultSuccess,
  calcResultError,

  calcReset,
};
