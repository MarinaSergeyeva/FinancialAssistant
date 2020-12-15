import React from 'react';
import { BtnNavLInk } from './expenseButtonStyled';
import IconGraph from '../Icons/IconGraph';

const ExpenseButton = ({ showNavigation }) => {
  return (
    <BtnNavLInk
      to="/expense/list"
      activeClassName="active"
      onClick={showNavigation}
      isActive={(_, location) =>
        location.pathname === '/expense/list' ||
        location.pathname === '/expense/categories'
      }
    >
      <IconGraph />
    </BtnNavLInk>
  );
};

export default ExpenseButton;
