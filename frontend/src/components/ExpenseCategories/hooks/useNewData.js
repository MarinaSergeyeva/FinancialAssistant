import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import transactionActions from '../../../redux/actions/transactionActions';
import { transactionOperations } from '../../../redux/operations';

const useNewData = date => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionActions.resetTransactionsExpense());
    dispatch(
      transactionOperations.getTransactionsExpense(
        date.getMonth() + 1,
        date.getFullYear(),
      ),
    );
    // eslint-disable-next-line
  }, [dispatch, date]);
};

export default useNewData;
