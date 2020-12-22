import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import ExpenseItemCategory from './ExpenseItemCategory/ExpenseItemCategory';
import { expensesCats } from './hooks/useItemFields';

const ExpenseListCats = () => {
  const { userTransactions } = useReduxState();
  const { expenseStats } = userTransactions;
  return (
    <>
      {expenseStats && (
        <ul>
          {expensesCats.map(item => {
            const cat = Object.keys(item)[0];
            if (!expenseStats[cat]) {
              return null;
            }
            return <ExpenseItemCategory key={cat} category={cat} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ExpenseListCats;
