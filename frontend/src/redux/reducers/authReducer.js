import authConstants from "../constants/authConstants";

const initialState = {
  token: "",
};

const auth = (state = initialState, { type, payload }) => {
  console.log(payload, "reducer")
  switch (type) {
    case authConstants.REGISTER_SUCCESS:
      return payload;

    case authConstants.LOGIN_SUCCESS:
      return payload;

    case authConstants.LOGOUT:
      return "";

    default:
      return state;
  }
};

export default auth;
