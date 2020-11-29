import { combineReducers } from 'redux';
import modalConstants from '../constants/modalConstants';

const modalCongratulationReducer = (state = false, action) => {
  switch (action.type) {
    case modalConstants.OPEN_CONGRATULATION:
      return (state = true);

    case modalConstants.CLOSE_CONGRATULATION:
      return (state = false);

    default:
      return state;
  }
};

const modalErrorReducer = (state = false, action) => {
  switch (action.type) {
    case modalConstants.OPEN_ERROR_MODAL:
      return (state = true);

    case modalConstants.CLOSE_ERROR_MODAL:
      return (state = false);

    default:
      return state;
  }
};

const modalReducer = combineReducers({
  congratulation: modalCongratulationReducer,
  error: modalErrorReducer,
});
export default modalReducer;
