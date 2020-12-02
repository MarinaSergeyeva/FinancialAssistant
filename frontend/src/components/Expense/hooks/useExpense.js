import { DateTime } from 'luxon';
import { useState } from 'react';

const useExpense = () => {
  const [page, setPage] = useState(1);

  const getDate = transactionDate => {
    const date = DateTime.fromISO(transactionDate);
    return `${date.c.year}.${date.c.month}.${date.c.day}`;
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return {
    page,
    loadMore,
    getDate,
  };
};

export default useExpense;
