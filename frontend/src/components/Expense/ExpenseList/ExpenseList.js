import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import transactionOperations from '../../../redux/operations/transactionOperations';
import { transactionSelectors } from '../../../redux/selectors';
import styled from 'styled-components';
import device from '../../../common/deviceSizes';
import { DateTime } from 'luxon';

const ExpenseList = ({ date }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1 && expenses.length > 0) {
      return;
    }

    dispatch(
      transactionOperations.getTransactionsExpense(
        date.getMonth(),
        date.getFullYear(),
        page,
      ),
    );

    // eslint-disable-next-line
  }, [page, date]);

  const expenses = useSelector(state =>
    transactionSelectors.getExpenses(state),
  );

  const getDate = transactionDate => {
    const date = DateTime.fromISO(transactionDate);
    return `${date.c.year}.${date.c.month}.${date.c.day}`;
  };

  const loadMore = () => {
    setPage(page + 1);
  };
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

const Button = styled.button`
  background-color: #ff6c00;
  border-radius: 8px;
  border: 0;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;
  transition: all 0.2s linear;
  :hover {
    background-color: #7c9af2;
  }
`;

const ExpensesList = styled.ul`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default ExpenseList;
