import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../stylesheet/vars';

import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <StyleNavLInk to="/plan">Персональный план</StyleNavLInk>
        <StyleNavLInk to="/expense">Расходы</StyleNavLInk>
        <StyleNavLInk to="/dynamics">Динамика</StyleNavLInk>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.div``;

const StyleNavLInk = styled(NavLink)`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding-top: 22px;
  padding-bottom: 24px;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: rgb(16.5%, 21.2%, 23.1%);
  &:hover,
  :focus {
    color: ${colors.main};
  }
  &:not(:first-child) {
    margin-left: 32px;
  }
`;
