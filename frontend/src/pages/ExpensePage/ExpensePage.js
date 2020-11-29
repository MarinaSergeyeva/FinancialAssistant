import React, { useState } from 'react';
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { device, Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
import expensePageMobile from '../../assets/images/ExpensePage/expensePage_bg-mobile.png';
import expensePageTablet from '../../assets/images/ExpensePage/expensePage_bg-tablet.png';
import expensePageDesktop from '../../assets/images/ExpensePage/expensePage_bg-desktop.png';
import expenseList from '../../assets/images/ExpensePage/expenseList_bg.png';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseListCats';
import ExpenseList from '../../components/Expense/ExpenseList/ExpenseList';

const ExpensePage = () => {
  {
    const match = useRouteMatch();
    const location = useLocation();
    const [startDate, setStartDate] = useState(new Date());
    const [calendarIsOpen, setIsOpenCalendar] = useState(false);
    const openDatePicker = () => {
      setIsOpenCalendar(!calendarIsOpen);
    };
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
            <SvgIcon>
              <use href="#calendar"></use>
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
              <ExpenseForm />
            </ExpenseFormWrapper>
            <ForecastExpense />
            <Mobile>
              <ExpensePageImg
                src={expensePageMobile}
                alt="expense page background"
              />
            </Mobile>
            <Tablet>
              <ExpensePageImg
                height="320"
                src={expensePageTablet}
                alt="expense page background"
              />
            </Tablet>
            <Desktop>
              <ExpensePageImg
                src={expensePageDesktop}
                alt="expense page background"
              />
            </Desktop>
          </ExpensePageContainer>
        ) : (
          <ExpensePageContainer>
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
              <DatePicker
                selected={startDate}
                locale={ru}
                onChange={date => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                open={calendarIsOpen}
                onClickOutside={openDatePicker}
                customInput={<CustomInput />}
              />
            </ExpenseListHeader>
            <ExpenseListImg src={expenseList} alt="expense list background" />
            <ExpenseListWrap>
              <Route path={`${match.url}/list`}>
                <ExpenseList date={startDate} />
              </Route>
              <Route path={`${match.url}/categories`}>
                <ExpenseCategories date={startDate} />
              </Route>
            </ExpenseListWrap>
          </ExpensePageContainer>
        )}
      </>
    );
  }
};

export default ExpensePage;

const ExpensePageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 200px;
  width: 280px;
  @media ${device.tablet} {
    max-height: calc(100vh - 87px);
    padding-top: 74px;
    padding-bottom: 510px;
    width: 690px;
  }
  @media ${device.desktop} {
    max-height: 100vh;
    padding-top: 64px;
    padding-bottom: 220px;
    width: 770px;
  }
`;

const ExpenseFormWrapper = styled.div`
  margin: 0 auto;

  margin-bottom: 52px;
  /* width: 690px; */
  /* display: flex; */
`;

const ExpensePageImg = styled.img`
  position: absolute;
  bottom: 0px;
  left: -20px;

  @media ${device.tablet} {
    max-height: 320px;
    left: -40px;
  }

  @media ${device.largeDesktop} {
    left: -255px;
  } ;
`;

const ExpenseListImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 100%;
`;

const ExpenseListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpenseListWrap = styled.div`
  min-height: 355px;
`;

const TabsModeView = styled.ul`
  margin-right: 50px;
  display: flex;
`;

const TabMode = styled.li`
  display: flex;
  border: 1px solid rgba(24, 25, 31, 0.03);
  border-radius: 8px 8px 0px 0px;

  .tab-link {
    padding: 18px 12px;
    flex-grow: 1;
    color: rgb(16.5%, 21.2%, 23.1%);
  }
  .active-tab {
    background: rgba(24, 25, 31, 0.03);
  }
`;

const BtnCalendar = styled.button`
  margin-bottom: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e3eaff;
  border-width: 0;
  border-radius: 8px;
`;

const SvgIcon = styled.svg`
  width: 14px;
  height: 16px;
  fill: #18191f;
  fill-opacity: 0.54;
`;
