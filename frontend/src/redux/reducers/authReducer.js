import authConstants from '../constants/authConstants';

const initialState = {
  id: '',
  username: '',
  token: '',
};

const auth = (state = {...initialState}, { type, payload }) => {
  switch (type) {
    case authConstants.REGISTER_SUCCESS:
      return { ...payload };

    case authConstants.LOGIN_SUCCESS:
      return { ...payload };

    case authConstants.LOGOUT:
      return state;

    default:
      return state;
  }
};

export default auth;
