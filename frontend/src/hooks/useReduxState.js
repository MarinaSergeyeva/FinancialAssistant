import {
  authSelector,
  calculatorSelector,
  categoriesSelector,
  chartSelector,
  errorSelector,
  statsFlatSelectors,
  transactionSelectors,
  userSelectors,
} from '../redux/selectors';

const { useSelector } = require('react-redux');

const useReduxState = () => {
  // AUTH //
  const isUserAuth = useSelector(authSelector.isAuthenticated);

  // USERINFO //
  const userInfo = useSelector(userSelectors.getCurrentUser);

  // TRANSACTIONS //
  const transaction = useSelector(transactionSelectors.getTransaction);
  const expenses = useSelector(transactionSelectors.getExpenses);
  const expensesCategories = useSelector(transactionSelectors.getExpensesCats);

  // STATS //
  const giftsForUnpacking = useSelector(
    statsFlatSelectors.getGiftsForUnpacking,
  );
  const savingsPercentage = useSelector(
    statsFlatSelectors.getSavingsPercentage,
  );
  const savingsValue = useSelector(statsFlatSelectors.getSavingsValue);
  const savingsForNextSquareMeterLeft = useSelector(
    statsFlatSelectors.getSavingsForNextSquareMeterLeft,
  );
  const statsFlat = useSelector(statsFlatSelectors.getStatsFlat);
  const flatPrice = useSelector(statsFlatSelectors.getFlatPrice);

  // CHART //
  const monthReports = useSelector(chartSelector.getMonthlyReport);

  // CATEGORIES //
  const categories = useSelector(categoriesSelector.getCategories);

  // CALCULATOR //
  const calculatorResult = useSelector(calculatorSelector.calcResult);

  // ERROR //
  const error = useSelector(errorSelector.getError);

  return {
    isUserAuth,
    userInfo,
    userTransactions: { transaction, expenses, expensesCategories },
    stats: {
      giftsForUnpacking,
      savingsPercentage,
      savingsValue,
      savingsForNextSquareMeterLeft,
      statsFlat,
      flatPrice,
    },
    monthReports,
    categories,
    calculatorResult,
    error,
  };
};

export default useReduxState;
