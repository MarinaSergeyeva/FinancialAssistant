const getTransaction = state => state.user.transaction;

const getExpenseStats = state => state.user.expenseStats;

const getExpenses = state => state.user.expenses;

export default { getTransaction, getExpenses, getExpenseStats };
