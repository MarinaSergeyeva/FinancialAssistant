const CHANGE_TRANSACTION_SUCCESS = '@transaction/changeTransactionSuccess';
const CLEAN_TRANSACTION_SUCCESS = '@transaction/cleanTransactionSuccess';

const CREATE_TRANSACTION_REQUEST = '@transaction/createTransactionRequest';
const CREATE_TRANSACTION_SUCCESS = '@transaction/createTransactionSuccess';
const CREATE_TRANSACTION_ERROR = '@transaction/createTransactionError';

const GET_TRANSACTIONS_CATS_REQUEST = '@transaction/getTransactionsCatsRequest';
const GET_TRANSACTIONS_CATS_SUCCESS = '@transaction/getTransactionsCatsSuccess';
const GET_TRANSACTIONS_CATS_ERROR = '@transaction/getTransactionsCatsError';
const GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST =
  '@transactions/getMonthlyExpenseRequest';
const GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS =
  '@transactions/getMonthlyExpenseSuccess';
const GET_MONTHLY_EXPENSE_TRANSACTIONS_ERROR =
  '@transactions/getMonthlyExpenseError';

const UPDATE_TRANSACTION_REQUEST = '@transactions/updateRequest';
const UPDATE_TRANSACTION_SUCCESS = '@transactions/updateSuccess';
const UPDATE_TRANSACTION_ERROR = '@transactions/updateError';

export default {
  CHANGE_TRANSACTION_SUCCESS,
  CLEAN_TRANSACTION_SUCCESS,

  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,

  GET_TRANSACTIONS_CATS_REQUEST,
  GET_TRANSACTIONS_CATS_SUCCESS,
  GET_TRANSACTIONS_CATS_ERROR,

  GET_MONTHLY_EXPENSE_TRANSACTIONS_REQUEST,
  GET_MONTHLY_EXPENSE_TRANSACTIONS_SUCCESS,
  GET_MONTHLY_EXPENSE_TRANSACTIONS_ERROR,

  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_ERROR,
};
