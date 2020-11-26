import errorConstants from '../constants/errorConstants';
import authConstants from '../constants/authConstants';

const initialResponse = {
  data: '',
  status: 0,
  statusText: '',
};

const error = (state = null, action) => {
  switch (action.type) {
    case errorConstants.SET_ERROR:
    case authConstants.REGISTER_ERROR:
    case authConstants.LOGIN_ERROR:
      // const response = action.payload.response
        // ? {
      //       data: action.payload.response.data,
      //       status: action.payload.response.status,
      //       statusText: action.payload.response.statusText,
      //     }
      //   : initialResponse;
      // return {
      //   ...response,
      return action.payload.message;
        // message: 
      // };

    case errorConstants.HIDE_ERROR:
    case authConstants.REGISTER_REQUEST:
    case authConstants.LOGIN_REQUEST:
      return null;

    default:
      return state;
  }
};

export default error;
