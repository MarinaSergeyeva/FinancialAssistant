import React from 'react';
import { ButtonWrapper } from './calcButtonStyled';

export const Button = props => {
  const clickCalc = () => {
    props.handleClick(props.children);
  };
  return (
    <ButtonWrapper radius={props.radius} onClick={clickCalc}>
      {props.children}
    </ButtonWrapper>
  );
};
