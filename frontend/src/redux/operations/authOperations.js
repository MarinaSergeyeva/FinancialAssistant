import actions from '../actions/authAction';
import axios from 'axios';

axios.defaults.baseURL = 'https://http://localhost:8080';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addNewUser = user => async dispatch => {
  console.log(user,"operation")

  dispatch(actions.registerRequest());
  try {
    const result = await axios.post('/api/auth/sign-up', user);
    token.set(result.data.token);
    dispatch(actions.registerSuccess(result.data));
  } catch (error) {
    dispatch(actions.registerError(error));
  }
};

// const loginUser = user => async dispatch => {
//   dispatch(actions.loginRequest());
//   try {
//     const result = await axios.post('/api/auth/sign-in', user);
//     token.set(result.data.token);
//     dispatch(actions.loginSuccess(result.data));
//   } catch (error) {
//     dispatch(actions.loginError(error));
//   }
// };

// const logOut = () => async dispatch => {
//   console.log('Запуск после рендра logOut');
//   dispatch(actions.logoutRequest());

//   try {
//     await axios.post('/api/auth/sign-out');
//     console.log('try logout');
//     token.unset();
//     dispatch(actions.logoutSuccess());
//   } catch (error) {
//     dispatch(actions.logoutError(error));
//   }
// };

// const currentUser = () => async (dispatch, getState) => {
//   console.log('Запуск после рендра currentUser');
//   dispatch(actions.getCurrentUserRequest());

  // const {
  //   auth: { token: persistedToken },
  // } = getState();
  // console.log(persistedToken, "persistedToken900776554")
  // if (!persistedToken) {
  //   return;
  // }
  // token.set(persistedToken)

//   try {
//     const result = await axios.get('/api/users/current');
//     console.log(result, 'result');
//     dispatch(actions.getCurrentUserSuccess(result));
//   } catch (error) {
//     dispatch(actions.getCurrentUserError(error));
//   }
// };

export default { 
  addNewUser, 
  // loginUser, logOut, currentUser 
};
