import React, { useState } from 'react';
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
import expensePageMobile from '../../assets/images/ExpensePage/expensePage_bg-mobile.png';
import expensePageTablet from '../../assets/images/ExpensePage/expensePage_bg-tablet.png';
import expensePageDesktop from '../../assets/images/ExpensePage/expensePage_bg-desktop.png';
import expenseList from '../../assets/images/ExpensePage/expenseList_bg.png';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseListCats';
import ExpenseList from '../../components/Expense/ExpenseList/ExpenseList';
import CustomInput from '../../components/CustomInput/CustomInput';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import {
  ExpenseFormWrapper,
  ExpenseListContainer,
  ExpenseListHeader,
  ExpenseListImg,
  ExpenseListWrap,
  ExpensePageContainer,
  ExpensePageImg,
  ForecastExpenseWrapper,
  TabMode,
  TabsModeView,
} from './expensePageStyled';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const ExpensePage = () => {
  const { isMobileDevice, isTabletDevice, isDesktopDevice } = useDeviceSizes();
  const [isTransactionSend, setTransactionStatus] = useState(false);
  const resetForm = () => {
    return isTransactionSend;
  };
  const match = useRouteMatch();
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [calendarIsOpen, openDatePicker] = useHandleBoolChange(false);
  const handleChange = date => {
    setStartDate(date);
  };

  return (
    <>
      {location.pathname === match.path ? (
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
          <ExpenseListHeader>
            <TabsModeView>
              <TabMode>
                <NavLink
                  to={{
                    pathname: `${match.url}/list`,
                  }}
                  className="tab-link"
                  activeClassName="active-tab"
                >
                  Список
                </NavLink>
              </TabMode>
              <TabMode>
                <NavLink
                  to={{
                    pathname: `${match.url}/categories`,
                  }}
                  className="tab-link"
                  activeClassName="active-tab"
                >
                  Категории
                </NavLink>
              </TabMode>
            </TabsModeView>
            <div>
              <DatePicker
                selected={startDate}
                locale={ru}
                onChange={handleChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
                open={calendarIsOpen}
                onClickOutside={openDatePicker}
                customInput={<CustomInput toggleOpen={openDatePicker} />}
                popperPlacement="bottom-end"
              />
            </div>
          </ExpenseListHeader>
          <ExpenseListWrap>
            <Route path={`${match.url}/list`}>
              <ExpenseList date={startDate} />
            </Route>
            <Route path={`${match.url}/categories`}>
              <ExpenseCategories date={startDate} />
            </Route>
          </ExpenseListWrap>
          <ExpenseListImg src={expenseList} alt="expense list background" />
        </ExpenseListContainer>
      )}
    </>
  );
};

export default ExpensePage;
