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
  ExpenseListWrap,
  ExpenseListContainer,
  ExpenseListFooter,
} from './expensePageStyled';
import ExpenseListHeader from '../../components/ExpenseListHeader/ExpenseListHeader';

const ExpensePage = () => {
  const [isTransactionSend, setTransactionStatus] = useState(false);
  const resetForm = () => {
    return isTransactionSend;
  };
  const match = useRouteMatch();
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());

  return location.pathname === match.path ? (
    <ExpensePageWrap>
      <ExpensePageContainer>
        <ExpenseFormWrapper>
          <ExpenseForm
            setTransactionStatus={setTransactionStatus}
            resetForm={resetForm}
          />
        </ExpenseFormWrapper>
        <ForecastExpense setTransactionStatus={setTransactionStatus} />
      </ExpensePageContainer>
      <ExpensePageFooter />
    </ExpensePageWrap>
  ) : (
    <ExpenseListWrap>
      <ExpenseListContainer>
        <ExpenseListHeader startDate={startDate} setStartDate={setStartDate} />
        <Route path={`${match.url}/list`}>
          <ExpenseList date={startDate} />
        </Route>
        <Route path={`${match.url}/categories`}>
          <ExpenseCategories date={startDate} />
        </Route>
      </ExpenseListContainer>
      <ExpenseListFooter />
    </ExpenseListWrap>
  );
};

export default ExpensePage;
