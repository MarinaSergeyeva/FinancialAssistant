import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import logoImg from "../../assets/images/logo/logo.png"

const Logo = () => {
  return (
      <>
          <LogoContainer
          src={logoImg}
          alt="logo img"
          >
        </LogoContainer>
      </>
    );
};

export default Logo;

const LogoContainer = styled.img`

`;
