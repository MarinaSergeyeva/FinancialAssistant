import React from 'react';
import styled from 'styled-components';

export const Button = props => (
  <ButtonWrapper onClick={() => props.handleClick(props.children)}>
    {props.children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  font-size: 1.4em;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  color: #212638;
  flex: 1;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
  :last-child {
    margin-right: 0px;
    background-color: #fe9241;
    color: #ffffff;
  }
`;
