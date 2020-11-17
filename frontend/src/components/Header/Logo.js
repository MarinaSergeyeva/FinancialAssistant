import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import logoImg from "../../assets/images/logo/logo.png"

const Logo = () => {
  return (
      <>
      <LogoContainer>
         <LogoContainerImg
           src={logoImg}
           alt="logo img"
         >
          </LogoContainerImg>
        </LogoContainer>
      </>
    );
};

export default Logo;

const LogoContainer = styled.div`
width: 26px;
height:26px;
padding-top:8px;
margin-left:20px;
margin-bottom:18px;

@media ${device.tablet} {
  margin-left:40px;
  margin-bottom:24px;
  }

@media ${device.desktop} {
  margin-left:55px;
  }
`;

const LogoContainerImg = styled.img`
background-size: cover;
`;
