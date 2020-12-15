import React, { useState } from 'react';
import { Route, useRouteMatch, useLocation } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseListCats';
import ExpenseList from '../../components/Expense/ExpenseList/ExpenseList';
import {
  ExpensePageWrap,
  ExpensePageContainer,
  ExpenseFormWrapper,
  ExpensePageFooter,
} from './expensePageStyled';
import ExpenseListHeader from '../../components/ExpenseListHeader/ExpenseListHeader';

const ExpensePage = () => {
  const [isTransactionSend, setTransactionStatus] = useState(false);
  const match = useRouteMatch();
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const isMain = location.pathname === match.path;

  return (
    <ExpensePageWrap className={isMain ? 'main' : 'list'}>
      <ExpensePageContainer>
        {isMain ? (
          <>
            <ExpenseFormWrapper>
              <ExpenseForm
                setTransactionStatus={setTransactionStatus}
                resetForm={isTransactionSend}
              />
            </ExpenseFormWrapper>
            <ForecastExpense setTransactionStatus={setTransactionStatus} />
          </>
        ) : (
          <>
            <ExpenseListHeader
              startDate={startDate}
              setStartDate={setStartDate}
            />
            <Route path={`${match.url}/list`}>
              <ExpenseList date={startDate} />
            </Route>
            <Route path={`${match.url}/categories`}>
              <ExpenseCategories date={startDate} />
            </Route>
          </>
        )}
      </ExpensePageContainer>
      <ExpensePageFooter className={isMain ? 'footer_main' : 'footer_list'} />
    </ExpensePageWrap>
  );
};

export default ExpensePage;
