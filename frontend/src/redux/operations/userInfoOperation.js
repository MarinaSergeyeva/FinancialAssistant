import axios from 'axios';
import userInfoAction from '../actions/userInfoAction';
import { authSelector } from '../selectors';
import { token } from './authOperations';

axios.defaults.baseURL = 'http://localhost:8080';

const updateUserInfo = userInfo => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userInfoAction.updateUserInfoRequest());
  try {
    const result = await axios.put('/api/v1/users/savings-info', userInfo);
    console.log('update UserInfo', result.data);
    dispatch(userInfoAction.updateUserInfoSuccess(result.data));
  } catch (err) {
    console.log(err.message);
    dispatch(userInfoAction.updateUserInfoError(err));
  }
};

export default { updateUserInfo };
