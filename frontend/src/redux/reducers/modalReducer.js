import modalConstans from '../constants/modalConstans';

const initialState = {
  congratulation: false,
  errorModule: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalConstans.OPEN_CONGRATULATION:
      return (initialState.congratulation = true);

    case modalConstans.CLOSE_CONGRATULATION:
      return (initialState.congratulation = false);

    case modalConstans.OPEN_ERROR_MODAL:
      return (initialState.errorModule = true);

    case modalConstans.CLOSE_ERROR_MODAL:
      return (initialState.errorModule = false);

    default:
      return state;
  }
};

export default modalReducer;
