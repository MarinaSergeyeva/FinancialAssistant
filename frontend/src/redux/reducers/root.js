import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import stats from './statsReduce';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import errorReducer from './errorReducer';
import calculatorReduce from './calculatorReduces';
import categoriesReducer from './categoriesReducer';

export const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'username', 'id'],
};

const root = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  user: combineReducers({
    info: userReducer,
    transaction: transactionReducer,
    stats: stats,
  }),
  calculator: calculatorReduce,
  categories: categoriesReducer,
  error: errorReducer,
});

export default root;
