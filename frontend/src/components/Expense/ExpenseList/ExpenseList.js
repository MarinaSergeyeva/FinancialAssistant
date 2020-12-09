import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import {
  transactionOperations,
  categoriesOperations,
} from '../../../redux/operations';
import transactionActions from '../../../redux/actions/transactionActions';
import useReduxState from '../../../hooks/useReduxState';
import useExpense from '../hooks/useExpense';
import { Button, ExpensesList } from './expenseListStyled';

const ExpenseList = ({ date }) => {
  const { page, setPage, loadMore, getDate } = useExpense();
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
