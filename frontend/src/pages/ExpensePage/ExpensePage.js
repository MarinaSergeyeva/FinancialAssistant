import React, { useState } from 'react';
import { Route, useRouteMatch, useLocation } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
import expensePageMobile from '../../assets/images/ExpensePage/expensePage_bg-mobile.png';
import expensePageTablet from '../../assets/images/ExpensePage/expensePage_bg-tablet.png';
import expensePageDesktop from '../../assets/images/ExpensePage/expensePage_bg-desktop.png';
import expenseList from '../../assets/images/ExpensePage/expenseList_bg.png';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseListCats';
import ExpenseList from '../../components/Expense/ExpenseList/ExpenseList';
import {
  ExpenseFormWrapper,
  ExpenseListContainer,
  ExpenseListImg,
  ExpenseListWrap,
  ExpensePageContainer,
  ExpensePageImg,
  ForecastExpenseWrapper,
} from './expensePageStyled';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import ExpenseListHeader from '../../components/ExpenseListHeader/ExpenseListHeader';
import useExpenseStats from './hooks/useExpenseStats';

const ExpensePage = () => {
  const { isMobileDevice, isTabletDevice, isDesktopDevice } = useDeviceSizes();
  const [isTransactionSend, setTransactionStatus] = useState(false);
  const resetForm = () => {
    return isTransactionSend;
  };
  const match = useRouteMatch();
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const { page, setPage } = useExpenseStats(startDate);

  return location.pathname === match.path ? (
    <ExpensePageContainer>
      <ExpenseFormWrapper>
        <ExpenseForm
          setTransactionStatus={setTransactionStatus}
          resetForm={resetForm}
        />
      </ExpenseFormWrapper>
      <ForecastExpenseWrapper>
        <ForecastExpense setTransactionStatus={setTransactionStatus} />
      </ForecastExpenseWrapper>
      <ExpensePageImg
        src={
          (isMobileDevice && expensePageMobile) ||
          (isTabletDevice && expensePageTablet) ||
          (isDesktopDevice && expensePageDesktop)
        }
        alt="expense page background"
      />
    </ExpensePageContainer>
  ) : (
    <ExpenseListContainer>
      <ExpenseListHeader startDate={startDate} setStartDate={setStartDate} />
      <ExpenseListWrap>
        <Route path={`${match.url}/list`}>
          <ExpenseList date={startDate} page={page} setPage={setPage} />
        </Route>
        <Route path={`${match.url}/categories`}>
          <ExpenseCategories />
        </Route>
      </ExpenseListWrap>
      <ExpenseListImg src={expenseList} alt="expense list background" />
    </ExpenseListContainer>
  );
};

export default ExpensePage;
