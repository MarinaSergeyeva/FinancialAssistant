import React from 'react';
import { ButtonWrapper } from './calcButtonStyled';

export const Button = props => {
  const { children, handleClick, radius } = props;
  const clickCalc = () => {
    handleClick(children);
  };
  return (
    <ButtonWrapper radius={radius} onClick={clickCalc}>
      {children}
    </ButtonWrapper>
  );
};
