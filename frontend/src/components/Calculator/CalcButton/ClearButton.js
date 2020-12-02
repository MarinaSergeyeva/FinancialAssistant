import React from 'react';
import { ClearBtn } from './clearButtonStyled';

export const ClearButton = props => (
  <ClearBtn className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </ClearBtn>
);
