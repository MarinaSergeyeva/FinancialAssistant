import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import LoginHeader from './LoginHeader/LoginHeader';
import ExpenseButton from '../ExpenseButton/ExpenseButton';
import Userinfo from './UserInfo/UserInfo';
import { HeaderContainer, UserInfoWrapper } from './headerStyled';
import useReduxState from '../../hooks/useReduxState';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const Header = ({ showNavigation, isNavigationOn }) => {
  const { isUserAuth } = useReduxState();
  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <HeaderContainer>
      {isUserAuth && isDesktopDevice && <Navigation />}
      <Logo />
      <UserInfoWrapper>
        {isUserAuth && !isMobileDevice && <ExpenseButton />}
        {isUserAuth && (
          <Userinfo
            showNavigation={showNavigation}
            isNavigationOn={isNavigationOn}
          />
        )}
        {!isUserAuth && !isMobileDevice && <LoginHeader />}
      </UserInfoWrapper>
    </HeaderContainer>
  );
};

export default Header;
