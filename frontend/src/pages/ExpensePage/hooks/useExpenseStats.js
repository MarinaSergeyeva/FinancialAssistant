import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from '../../../hooks/useReduxState';
import transactionActions from '../../../redux/actions/transactionActions';
import { transactionOperations } from '../../../redux/operations';

const useExpenseStats = date => {
  const { userTransactions } = useReduxState();
  const { expenses } = userTransactions;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (expenses.length > 0) {
      const lastPage = Math.ceil(expenses.length / 10);
      if (page <= lastPage) {
        const prevDate = new Date(expenses[0].transactionDate);
        if (
          prevDate.getMonth() === date.getMonth() &&
          prevDate.getFullYear() === date.getFullYear()
        ) {
          if (lastPage > page) {
            setPage(lastPage);
          }
          return;
        } else {
          dispatch(transactionActions.resetTransactionsExpense());
          setPage(1);
        }
      }
    }
    dispatch(
      transactionOperations.getTransactionsExpense(
        date.getMonth() + 1,
        date.getFullYear(),
        page,
      ),
    );
    // eslint-disable-next-line
  }, [page, date]);

  return { page, setPage };
};

export default useExpenseStats;
