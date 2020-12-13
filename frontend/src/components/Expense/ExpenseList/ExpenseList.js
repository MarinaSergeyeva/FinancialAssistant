import React from 'react';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import useReduxState from '../../../hooks/useReduxState';
import useExpense from '../hooks/useExpense';
import { Button, ExpensesList } from './expenseListStyled';

const ExpenseList = ({ date }) => {
  const { countTransactions, loadMore, getDate } = useExpense(date);

  const { userTransactions } = useReduxState();
  const { expenses } = userTransactions;
  return (
    expenses.length > 0 && (
      <>
        <ExpensesList>
          {expenses.map(expense => (
            <ExpenseListItem
              date={getDate(expense.transactionDate)}
              key={expense._id}
              expense={expense}
            />
          ))}
        </ExpensesList>
        {countTransactions === 10 && <Button onClick={loadMore}>...</Button>}
      </>
    )
  );
};

export default ExpenseList;
