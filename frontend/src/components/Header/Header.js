import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import Navigation from '../Header/Navigation';
import Logo from '../Header/Logo';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <p>Finance</p>
        <Navigation />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 1px 0px #e5e9f2;

  @media ${device.tablet} {
    width: 768px;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    position: relative;
    width: 1280px;
    margin: 0 auto;
  }

  & p {
    padding-top: 8px;
    display: block;
    min-width: 74px;
    height: auto;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    color: #18191f;
    margin-left: 8px;
    margin-bottom: 20px;
  }
`;
