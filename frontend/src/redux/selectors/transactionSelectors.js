const getTransaction = state => state.user.transaction;

const getExpensesCats = state => state.user.catsExpense;

const getExpenses = state => state.user.expenses;

export default { getTransaction, getExpenses, getExpensesCats };
