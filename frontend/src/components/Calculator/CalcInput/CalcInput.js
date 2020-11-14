import React from 'react';
import styled from 'styled-components';

const Input = props => {
  return (
    <>
      <InputWrapper>{props.input}</InputWrapper>
    </>
  );
};

export default Input;

const InputWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  padding-right: 10px;
  height: 36px;
`;
