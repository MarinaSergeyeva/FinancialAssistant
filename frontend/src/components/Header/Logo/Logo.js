import React from 'react';
import IconLogo from '../../Icons/IconLogo';
import { Link } from 'react-router-dom';
import { LogoContainer } from './logoStyled';
import { homeRoute } from '../../../assets/routes/routes';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={homeRoute.path} className="logoIcon">
        <IconLogo />
        <p className="logoText">Finance</p>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
