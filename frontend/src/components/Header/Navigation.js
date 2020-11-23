import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../stylesheet/vars';
import device from '../../common/deviceSizes';
import Logout from './Logout';
import { useMediaQuery } from 'react-responsive';
import navigationBackgroundTablet from '../../assets/images/Navigation/navigation_bg-tablet.png';

const Navigation = () => {
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });
  return (
    <>
      <NavigationContainer>
        <StyleNavLInk to="/plan">Персональный план</StyleNavLInk>
        <StyleNavLInk to="/expense">Расходы</StyleNavLInk>
        <StyleNavLInk to="/dynamics">Динамика</StyleNavLInk>
        {(isMobileDevice || isTabletDevice) && <Logout />}
        {isTabletDevice && (
          <NavigationBgImg
            src={navigationBackgroundTablet}
            alt="navigation tablet background"
          />
        )}
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 280px;
    padding: 27px 00px;
  }
  @media ${device.tablet} {
    width: 768px;
    padding-top: 74px;
    padding-left: 316px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    margin: 0;
    align-items: center;
  }
`;

const StyleNavLInk = styled(NavLink)`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  font-weight: 700;
  color: rgb(16.5%, 21.2%, 23.1%);
  &:hover,
  :focus {
    color: ${colors.main};
  }
  
  &:not(:last-child) {
      @media ${device.desktop} {   
    margin-right: 32px;
    }
  }

  &:not(:last-of-type) {
      margin-bottom: 20px;
    @media ${device.desktop} {   
      margin-bottom: 0px;
    }
  }

  &:last-of-type {
    margin-bottom: 34px;
    @media ${device.tablet} {
        margin-bottom: 74px;
      }
    @media ${device.desktop} {
        margin:0;
      }
    }
  }

  @media ${device.tablet} {
    &:last-of-type {
      margin-bottom: 74px;
    }
  }
`;

const NavigationBgImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
