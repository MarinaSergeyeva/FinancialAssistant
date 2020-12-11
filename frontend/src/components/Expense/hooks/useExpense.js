import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  transactionOperations,
  categoriesOperations,
} from '../../../redux/operations';
import transactionActions from '../../../redux/actions/transactionActions';
import { DateTime } from 'luxon';
import useReduxState from '../../../hooks/useReduxState';

const useExpense = date => {
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
  }, []);
  const [countTransactions, setCountTransactions] = useState(0);

  useEffect(() => {
    if (expenses.length > 0) {
      const lastPage = Math.ceil(expenses.length / 10);
      const lastPart = expenses.length - (lastPage - 1) * 10;
      setCountTransactions(lastPart);
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
    const getData = async () => {
      const countRows = await dispatch(
        transactionOperations.getTransactionsExpense(
          date.getMonth() + 1,
          date.getFullYear(),
          page,
        ),
      );
      setCountTransactions(countRows);
    };
    getData();
    // eslint-disable-next-line
  }, [page, date]);

  return { countTransactions, loadMore, getDate };
};

export default useExpense;
