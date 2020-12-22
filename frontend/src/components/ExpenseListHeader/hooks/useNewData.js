import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxState from '../../../hooks/useReduxState';
import { transactionActions } from '../../../redux/actions';
import { transactionOperations } from '../../../redux/operations';

const useNewData = (date, setIsDateSend) => {
  const { userTransactions } = useReduxState();
  const { expenses } = userTransactions;
  const dispatch = useDispatch();
  useEffect(() => {
    if (expenses.length > 0) {
      const prevDate = new Date(expenses[0].transactionDate);
      if (
        prevDate.getMonth() === date.getMonth() &&
        prevDate.getFullYear() === date.getFullYear()
      ) {
        return;
      } else {
        dispatch(transactionActions.resetTransactionsExpense());
      }
    }

    dispatch(
      transactionOperations.getTransactionsExpense(
        date.getMonth() + 1,
        date.getFullYear(),
      ),
    );
    setIsDateSend(true);
    // eslint-disable-next-line
  }, [dispatch, date]);
};

export default useNewData;
