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

export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'username', 'auth'],
};

export const persistConfigTransaction = {
  key: 'transaction',
  storage,
  whitelist: ['category', 'comment', 'amount', 'transaction'],
};

export const persistConfigUserInfo = {
  key: 'userInfo',
  storage,
  whitelist: [
    'balance',
    'totalSalary',
    'passiveIncome',
    'incomePercentageToSavings',
    'flatPrice',
    'flatSquareMeters',
    'userInfo',
  ],
};

const root = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  user: combineReducers({
    info: persistReducer(persistConfigUserInfo, userReducer),
    transaction: persistReducer(persistConfigTransaction, transactionReducer),
    stats: stats,
  }),
  calculator: calculatorReduce,
  categories: categoriesReducer,
  error: errorReducer,
});

export default root;
