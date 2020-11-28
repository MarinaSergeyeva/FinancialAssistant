import errorConstants from '../constants/errorConstants';
import authConstants from '../constants/authConstants';

const initialResponse = {
  data: '',
  status: 0,
  statusText: '',
};

const error = (state = null, action) => {
  switch (action.type) {
    case authConstants.REGISTER_ERROR:
      return { statusText: action.payload.message, kindOfErr: 'Register' };
    case authConstants.LOGIN_ERROR:
      return { statusText: action.payload.message, kindOfErr: 'Login' };
    case errorConstants.SET_ERROR:
      return action.payload.message;
    case errorConstants.HIDE_ERROR:
    case authConstants.REGISTER_REQUEST:
    case authConstants.LOGIN_REQUEST:
      return null;

    default:
      return state;
  }
};

export default error;
