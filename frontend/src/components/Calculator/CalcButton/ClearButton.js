import React from 'react';
import { ClearBtn } from './clearButtonStyled';

export const ClearButton = props => {
  const { children, handleClear } = props;
  return (
    <ClearBtn className="clear-btn" onClick={handleClear}>
      {children}
    </ClearBtn>
  );
};
