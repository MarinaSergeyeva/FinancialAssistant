import {
  authSelector,
  calculatorSelector,
  categoriesSelector,
  chartSelector,
  errorSelector,
  statsFlatSelectors,
  transactionSelectors,
  userIDSelector,
  userSelectors,
} from '../redux/selectors';

const { useSelector } = require('react-redux');

const useReduxState = () => {
  // AUTH //
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));

  // USERINFO //
  const userInfo = useSelector(state => userSelectors.getCurrentUser(state));

  // USER_ID
  const userID = useSelector(state => userIDSelector.getUserID(state));
  // TRANSACTIONS //
  const transaction = useSelector(state =>
    transactionSelectors.getTransaction(state),
  );
  const expenses = useSelector(state =>
    transactionSelectors.getExpenses(state),
  );
  const expensesCategories = useSelector(state =>
    transactionSelectors.getExpensesCats(state),
  );

  // STATS //
  const giftsForUnpacking = useSelector(state =>
    statsFlatSelectors.getGiftsForUnpacking(state),
  );
  const savingsPercentage = useSelector(state =>
    statsFlatSelectors.getSavingsPercentage(state),
  );
  const savingsValue = useSelector(state =>
    statsFlatSelectors.getSavingsValue(state),
  );
  const savingsForNextSquareMeterLeft = useSelector(state =>
    statsFlatSelectors.getSavingsForNextSquareMeterLeft(state),
  );
  const statsFlat = useSelector(state =>
    statsFlatSelectors.getStatsFlat(state),
  );
  const flatPrice = useSelector(state =>
    statsFlatSelectors.getFlatPrice(state),
  );

  // CHART //
  const monthReports = useSelector(state =>
    chartSelector.getMonthlyReport(state),
  );

  // CATEGORIES //
  const categories = useSelector(state =>
    categoriesSelector.getCategories(state),
  );

  // CALCULATOR //
  const calculatorResult = useSelector(state =>
    calculatorSelector.calcResult(state),
  );

  // ERROR //
  const error = useSelector(state => errorSelector.getError(state));

  return {
    isUserAuth,
    userID,
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
