import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations } from '../../redux/operations';
import { transactionSelectors } from '../../redux/selectors';
import ExpenseItemCategory, { expensesCategories } from './ExpenseItemCategory';

const ExpenseListCats = ({ date }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionSelectors.getExpensesCats);
  useEffect(() => {
    dispatch(transactionOperations.getTransactionsCats(date));
  }, [date]);
  return (
    transactions && (
      <ul>
        {expensesCategories.map(item => {
          const cat = Object.keys(item)[0];
          if (!transactions[cat]) {
            return;
          }
          return <ExpenseItemCategory key={cat} category={cat} />;
        })}
      </ul>
    )
  );
};

export default ExpenseListCats;
