import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesOperations } from '../../../redux/operations';
import { DateTime } from 'luxon';

const useExpense = (page, setPage) => {
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

  return { loadMore, getDate };
};

export default useExpense;
