import React, { useEffect, useState } from 'react';
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

const Header = ({ showNavigation }) => {
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));

  // const isUserAuth = useSelector(state => state.auth.token);

  // console.log('showMobileNavigation', showMobileNavigation);
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
        {isUserAuth && <Userinfo showNavigation={showNavigation} />}
        {!isUserAuth && !isMobileDevice && <LoginHeader />}
      </HeaderContainer>
      <MobileNavigationContainer></MobileNavigationContainer>
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
  /* box-shadow: 0px 1px 0px #e5e9f2; */
  border-bottom: 1px solid #e5e9f2;

  @media ${device.tablet} {
    width: 690px;
  }

  @media ${device.desktop} {
    width: 1170px;
  } ;
`;

const MobileNavigationContainer = styled.div`
  width: 280px;
  margin: 0 auto;
`;
