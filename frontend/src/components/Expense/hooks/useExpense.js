import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  categoriesOperations,
  transactionOperations,
} from '../../../redux/operations';
import { DateTime } from 'luxon';
import useReduxState from '../../../hooks/useReduxState';

const useExpense = (date, isDateSend) => {
  const { userTransactions } = useReduxState();
  const { expenses } = userTransactions;
  const [page, setPage] = useState(1);
  const getDate = transactionDate => {
    const date = DateTime.fromISO(transactionDate);
    return `${date.c.year}.${date.c.month}.${date.c.day}`;
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesOperations.getCategories());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (!isDateSend) {
      return;
    }
    if (expenses.length > 0) {
      const lastPage = Math.ceil(expenses.length / 10);
      if (page === lastPage) {
        return;
      }

      if (page < lastPage) {
        setPage(lastPage);
        return;
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
  }, [page]);

  return { page, loadMore, getDate };
};

export default useExpense;
