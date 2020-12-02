import React from 'react';
import styled from 'styled-components';

function funcMessage(errorMessage) {
  return (
    <>
      <ErrMessage>{errorMessage}</ErrMessage>
    </>
  );
}

const ErrMessage = styled.span`
  position: absolute;
  top: 65px;
  left: 10px;
  font-size: 9.5px;
  font-weight: 500;
  color: #fe6083;
`;

export default funcMessage;
