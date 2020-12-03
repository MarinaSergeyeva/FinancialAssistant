import React from 'react';
import logoImg from '../../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import { LogoContainer, LogoImg } from './logoStyled';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/Authpage" className="logoIcon">
        <LogoImg src={logoImg} alt="logo img" />
        <p className="logoText">Finance</p>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
