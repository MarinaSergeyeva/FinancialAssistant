import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import transactionOperations from '../../../redux/operations/transactionOperations';
import { transactionSelectors } from '../../../redux/selectors';

const ExpenseList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionOperations.getTransactionsExpense(11, 2020));
  }, []);

  const expenses = useSelector(state =>
    transactionSelectors.getExpenses(state),
  );
  return (
    <ul>
      {expenses.map(expense => (
        <ExpenseListItem expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
