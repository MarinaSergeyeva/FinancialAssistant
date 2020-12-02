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
import calculatorReducer from './calculatorReduces';
import modalReducer from '../reducers/modalReducer';
import categoriesReducer from './categoriesReducer';
import expenses from './expenseReducer';

export const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'username', 'id'],
};

export const persistConfigTransaction = {
  key: 'transaction',
  storage,
  whitelist: ['category', 'comment', 'amount', 'transaction'],
};

// export const persistConfigUserInfo = {
//   key: 'userInfo',
//   storage,
//   whitelist: [
//     'balance',
//     'totalSalary',
//     'passiveIncome',
//     'incomePercentageToSavings',
//     'flatPrice',
//     'flatSquareMeters',
//     'userInfo',
//   ],
// };

const root = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  user: combineReducers({
    info: userReducer,
    transaction: persistReducer(persistConfigTransaction, transactionReducer),
    stats: stats,
    monthReports: monthlyReportReducer,
    expenses: expenses,
    catsExpense: catsExpenseReducer,
  }),
  calculator: calculatorReducer,
  categories: categoriesReducer,
  error: errorReducer,
  modal: modalReducer,
});

export default root;
