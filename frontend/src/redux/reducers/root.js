import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import stats from './statsReduce';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import calculatorReduce from './calculatorReduces';

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'auth'],
};

const root = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  user: combineReducers({
    info: userReducer,
    transaction: transactionReducer,
  }),
  stats: stats,
  calculator: calculatorReduce,
  error: {},
});

export default root;
