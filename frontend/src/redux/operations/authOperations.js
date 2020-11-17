import authAction from "../actions/authAction";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  axios
    .post("/api/v1/auth/sign-up", credentials)
    .then((res) => {
      console.log(res.data, "Registration");
      token.set(res.data.token);
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authAction.registrationError(err));
    });
};

const userLogin = (credentials) => (dispatch) => {
  dispatch(authAction.loginRequest());
  axios
    .post("/api/v1/auth/sign-in", credentials)
    .then((res) => {
      console.log(res.data, "userLogin");
      dispatch(authAction.loginSuccess(res.data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(authAction.loginError(err));
    });
};

export default {
  token,
  userRegistration,
  userLogin,
};
