import constants from '../constants/spinnerConstants';

const spinnerReducer = (state = false, { type }) => {
  switch (type) {
    case constants.LOADER_ON:
      return true;
    case constants.LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default { spinnerReducer };
