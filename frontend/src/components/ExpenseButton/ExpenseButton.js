import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../common/deviceSizes';
import { colors } from '../../stylesheet/vars';
import dynamics from '../../assets/images/Navigation/dynamics.svg';

const ExpenseButton = ({ showNavigation }) => {
  return (
    <>
      <BtnNavLInk
        to="/expense/list"
        activeClassName="active"
        onClick={showNavigation}
      >
        <img width="12" height="12" alt="graph" src={dynamics} />
      </BtnNavLInk>
    </>
  );
};

export default ExpenseButton;

const BtnNavLInk = styled(NavLink)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 8px;

  &.active {
    background-color: ${colors.main};
  }

  @media ${device.mobile} {
    margin-bottom: 34px;
  }
  @media ${device.tablet} {
    margin-right: 28px;
  }
  @media ${device.desktop} {
    margin-right: 36px;
  }
`;

const SvgIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: white;
`;
