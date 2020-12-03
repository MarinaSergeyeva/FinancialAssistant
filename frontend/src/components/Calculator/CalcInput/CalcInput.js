import React from 'react';
import { InputWrapper } from './calcInputStyled';

const Input = props => {
  const { input } = props;
  return <InputWrapper>{input}</InputWrapper>;
};

export default Input;
