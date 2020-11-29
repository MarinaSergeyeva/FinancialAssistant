import authConstants from '../constants/authConstants';

const initialState = {
  username: null,
  token: null,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstants.REGISTER_SUCCESS:
      return payload;

    case authConstants.LOGIN_SUCCESS:
      return payload;

    case authConstants.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default auth;
