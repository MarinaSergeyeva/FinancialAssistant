import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import transactionOperations from '../../../redux/operations/transactionOperations';
import categoriesOperations from '../../../redux/operations/categoriesOperations';
import useReduxState from '../../../hooks/useReduxState';
import useExpense from '../hooks/useExpense';
import { Button, ExpensesList } from './expenseListStyled';

const ExpenseList = ({ date }) => {
  const { page, loadMore, getDate } = useExpense();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperations.getCategories());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (page === 1 && expenses.length > 0) {
      return;
    }

    dispatch(
      transactionOperations.getTransactionsExpense(
        date.getMonth() + 1,
        date.getFullYear(),
        page,
      ),
    );

    // eslint-disable-next-line
  }, [page, date]);

  const { userTransactions } = useReduxState();
  const { expenses } = userTransactions;

  return (
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
      {expenses.length > 8 && <Button onClick={loadMore}>...</Button>}
    </>
  );
};

export default ExpenseList;
