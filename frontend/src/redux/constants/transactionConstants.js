const CHANGE_TRANSACTION_SUCCESS = '@transaction/changeTransactionSuccess';

const CREATE_TRANSACTION_REQUEST = '@transaction/createTransactionRequest';
const CREATE_TRANSACTION_SUCCESS = '@transaction/createTransactionSuccess';
const CREATE_TRANSACTION_ERROR = '@transaction/createTransactionError';

const GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST =
  '@transactions/getMonthlyExpenseRequest';
const GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS =
  '@transactions/getMonthlyExpenseSuccess';
const GET_MONTHLY_EXPENSE_TRANSACTIONS_ERROR =
  '@transactions/getMonthlyExpenseError';

export default {
  CHANGE_TRANSACTION_SUCCESS,

  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,

  GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST,
  GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS,
  GET_MONTHLY_EXPENSE_TRANSACTIONS_ERROR,
};
