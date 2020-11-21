import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import stats from './statsReduce';
import userReducer from './userReducer';

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'auth'],
};

const root = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  user: userReducer,
  stats: stats,
  error: {},
});

export default root;
