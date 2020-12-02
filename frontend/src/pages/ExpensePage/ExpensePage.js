import React, { useState } from 'react';
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
import expensePageMobile from '../../assets/images/ExpensePage/expensePage_bg-mobile.png';
import expensePageTablet from '../../assets/images/ExpensePage/expensePage_bg-tablet.png';
import expensePageDesktop from '../../assets/images/ExpensePage/expensePage_bg-desktop.png';
import expenseList from '../../assets/images/ExpensePage/expenseList_bg.png';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseListCats';
import ExpenseList from '../../components/Expense/ExpenseList/ExpenseList';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import {
  BtnCalendar,
  ExpenseFormWrapper,
  ExpenseListContainer,
  ExpenseListHeader,
  ExpenseListImg,
  ExpenseListWrap,
  ExpensePageContainer,
  ExpensePageImg,
  ForecastExpenseWrapper,
  SvgIcon,
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
  // const openDatePicker = () => {
  //   setIsOpenCalendar(!calendarIsOpen);
  // };

  const CustomInput = React.forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen);
      props.onClick();
      openDatePicker();
    };
    return (
      <BtnCalendar onClick={handleClick} ref={ref}>
        {isOpen ? (
          props.value
        ) : (
          <SvgIcon id="calendar" viewBox="0 0 14 16">
            <path d=" M12.25 2.25H11.5V0.75H10V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.2575 2.925 0.2575 3.75L0.25 14.25C0.25 15.075 0.9175 15.75 1.75 15.75H12.25C13.075 15.75 13.75 15.075 13.75 14.25V3.75C13.75 2.925 13.075 2.25 12.25 2.25ZM12.25 14.25H1.75V6H12.25V14.25ZM3.25 7.5H7V11.25H3.25V7.5Z" />
          </SvgIcon>
        )}
      </BtnCalendar>
    );
  });
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
                onChange={date => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
                open={calendarIsOpen}
                onClickOutside={openDatePicker}
                customInput={<CustomInput />}
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
