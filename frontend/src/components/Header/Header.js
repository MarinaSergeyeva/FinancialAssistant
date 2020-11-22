import React, { useEffect, useState } from 'react';
import Unauthorized from '../Header/Unauthorized';
import Authorized from '../Header/Authorized';
import Logo from './Logo';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import Userinfo from './UserInfo';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import Logout from './Logout';
import Navigation from './Navigation';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isUserAuth = useSelector(state => state.auth.token);

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  return (
    <>
      <HeaderContainer>
        {/* <Unauthorized /> */}
        {/* <Authorized /> */}
        {isDesktopDevice && <Navigation />}
        <Logo />
        {isUserAuth && <Userinfo />}
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

  @media ${device.tablet} {
    width: 690px;
  }

  @media ${device.desktop} {
    width: 1170px;
  } ;
`;
