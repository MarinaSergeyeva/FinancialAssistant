import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import stats from './statsReduce';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import catsExpenseReducer from './catsExpenseReducer';
import monthlyReportReducer from './chartReducer';
import errorReducer from './errorReducer';
import calculatorReduce from './calculatorReduces';
import categoriesReducer from './categoriesReducer';
import expenses from './expenseReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'auth'],
};

const root = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: combineReducers({
    info: userReducer,
    transaction: transactionReducer,
    stats: stats,
    monthReports: monthlyReportReducer,
    expenses: expenses,
    catsExpense: catsExpenseReducer,
  }),
  calculator: calculatorReduce,
  categories: categoriesReducer,
  error: errorReducer,
});

export default root;
