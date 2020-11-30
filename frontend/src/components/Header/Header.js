import React from 'react';
// import Unauthorized from '../Header/Unauthorized';
// import Authorized from '../Header/Authorized';
import Logo from './Logo';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import Userinfo from './UserInfo';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
// import Logout from './Logout';
import Navigation from './Navigation';
import { useMediaQuery } from 'react-responsive';
import LoginHeader from './LoginHeader';
import ExpenseButton from '../ExpenseButton/ExpenseButton';

const Header = ({ showNavigation, isNavigationOn }) => {
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  return (
    <>
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
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 17px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e9f2;

  @media ${device.tablet} {
    width: 690px;
  }

  @media ${device.desktop} {
    width: 1170px;
  } ;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 280px;
  margin: 0 auto; */
`;
