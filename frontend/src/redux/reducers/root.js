import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const root = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  error: {}
});

export default root;
