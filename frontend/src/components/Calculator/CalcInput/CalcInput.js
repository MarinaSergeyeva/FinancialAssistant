import React from 'react';
import styled from 'styled-components';
import device from '../../../common/deviceSizes';

const Input = props => {
  return (
    <>
      <InputWrapper>{props.input}</InputWrapper>
    </>
  );
};

export default Input;

const InputWrapper = styled.div`
  overflow-y: hidden;
  /* overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  } */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  padding-right: 10px;
  height: 36px;

  @media ${device.tablet} {
    font-size: 24px;
    height: 24px;
  }
  @media ${device.desktop} {
    font-size: 24px;
    height: 24px;
  }
`;
