import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <LogoContainer>
        <Link to="/">
          <LogoContainerImg src={logoImg} alt="logo img"></LogoContainerImg>
        </Link>
      </LogoContainer>
    </>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 26px;
  height: 26px;
  padding-top: 8px;
`;

const LogoContainerImg = styled.img`
  background-size: cover;
`;
