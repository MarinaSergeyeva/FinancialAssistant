import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import stats from './statsReduce';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import errorReducer from './errorReducer';
import calculatorReduce from './calculatorReduces';
import modalReducer from '../reducers/modalReducer';

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
    stats: stats,
  }),
  calculator: calculatorReduce,
  error: errorReducer,
  modal: modalReducer,
});

export default root;
