import { useSelector } from 'react-redux';
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

const useReduxState = () => {
  // AUTH //
  const isUserAuth = useSelector(authSelector.isAuthenticated);

  // USERINFO //
  const userInfo = useSelector(userSelectors.getCurrentUser);

  // USER_ID
  const userID = useSelector(state => userIDSelector.getUserID(state));
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
