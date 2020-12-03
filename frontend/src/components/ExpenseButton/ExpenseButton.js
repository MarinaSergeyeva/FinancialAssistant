import React from 'react';
import dynamics from '../../assets/images/Navigation/dynamics.svg';
import { BtnNavLInk } from './expenseButtonStyled';

const ExpenseButton = ({ showNavigation }) => {
  return (
    <BtnNavLInk
      to="/expense/list"
      activeClassName="active"
      onClick={showNavigation}
    >
      <img
        className="graph-icon"
        width="12"
        height="12"
        alt="graph"
        src={dynamics}
      />
    </BtnNavLInk>
  );
};

export default ExpenseButton;
