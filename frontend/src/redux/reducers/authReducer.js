import authConstants from '../constants/authConstants';

const initialState = {
  token: null,
  username: null,
};

const auth = (state = initialState, { type, payload }) => {
  console.log(payload,"auth");

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
