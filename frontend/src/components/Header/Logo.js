import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import device from '../../common/deviceSizes';

const Logo = () => {
  return (
    <>
      <LogoContainer>
        <Link to="/" className="logoIcon">
          <LogoImg src={logoImg} alt="logo img" />
          <p className="logoText">Finance</p>
        </Link>
      </LogoContainer>
    </>
  );
};

export default Logo;

const LogoContainer = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .logoIcon {
    display: flex;
  }
  .logoText {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    color: #18191f;
    margin-left: 8px;
    padding-top: 2px;
  }
`;

const LogoImg = styled.img``;
