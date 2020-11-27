import React from 'react';
import { Route, Link, useRouteMatch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { device, Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import ForecastExpense from '../../components/ForecastExpense/ForecastExpense';
// import { size } from '../../common/deviceSizes';
import expensePageMobile from '../../assets/images/ExpensePage/expensePage_bg-mobile.png';
import expensePageTablet from '../../assets/images/ExpensePage/expensePage_bg-tablet.png';
import expensePageDesktop from '../../assets/images/ExpensePage/expensePage_bg-desktop.png';
import LogoutModal from '../../components/Logout/LogoutModal';
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseCategories';
import ExpenseList from '../../components/ExpenseList/ExpenseList';

const ExpensePage = () => {
  {
    const match = useRouteMatch();
    const location = useLocation();
    console.log('location', location);
    console.log('match', match); // '/expense'
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
          <ul style={{ margin: '50px 50px', display: 'flex' }}>
            <li style={{ marginRight: '35px' }}>
              <Link
                to={{
                  pathname: `${match.url}/list`,
                }}
              >
                Список
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/categories`,
                }}
              >
                Категории
              </Link>
            </li>
          </ul>
        )}
        <Route path={`${match.url}/list`}>
          <ExpenseList />
        </Route>
        <Route path={`${match.url}/categories`}>
          <ExpenseCategories />
        </Route>
        {/* <Route path={`${match.path}/categories`} component={ExpenseCategories} /> */}
        {/* <Route path={`${match.path}/list`} component={ExpensesList} /> */}
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
    padding-top: 74px;
    padding-bottom: 510px;
    width: 690px;
  }
  @media ${device.desktop} {
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
    left: -40px;
  }

  @media ${device.largeDesktop} {
    left: -255px;
  } ;
`;
