import React from 'react';
import navigationBackgroundTablet from '../../../assets/images/Navigation/navigation_bg-tablet.png';
import ExpenseButton from '../../ExpenseButton/ExpenseButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import {
  NavigationBgImg,
  NavigationContainer,
  StyleNavLInk,
} from './navigationStyled';
import {
  planRoute,
  expenseRoute,
  dynamicsRoute,
} from '../../../assets/routes/routes';

const Navigation = ({ showNavigation, isNavigationOn }) => {
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();

  const onHandleChange = () => {
    if (isNavigationOn) {
      showNavigation();
    }
  };

  return (
    <NavigationContainer>
      <StyleNavLInk
        to={planRoute.path}
        activeClassName="active"
        onClick={onHandleChange}
      >
        Персональный план
      </StyleNavLInk>
      <StyleNavLInk
        to={expenseRoute.path}
        exact
        activeClassName="active"
        onClick={onHandleChange}
      >
        Расходы
      </StyleNavLInk>
      <StyleNavLInk
        to={dynamicsRoute.path}
        activeClassName="active"
        onClick={onHandleChange}
      >
        Динамика
      </StyleNavLInk>
      {isMobileDevice && <ExpenseButton showNavigation={showNavigation} />}
      {(isMobileDevice || isTabletDevice) && (
        <LogoutButton showNavigation={showNavigation} />
      )}
      {isTabletDevice && (
        <NavigationBgImg
          src={navigationBackgroundTablet}
          alt="navigation tablet background"
        />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
