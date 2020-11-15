import React from 'react';
import styled from 'styled-components';

const ApartmentVisualization = () => {
  return (
    <>
      <ApartmentWrapper> hello </ApartmentWrapper>
    </>
  );
};

export default ApartmentVisualization;

const ApartmentWrapper = styled.div`
  width: 400px;
  height: 150px;
  text-align: center;
  outline: 1px solid red;
  background: linear-gradient(
    to bottom,
    rgba(4, 120, 21, 0.5) 70%,
    rgba(255, 255, 255, 0) 70%,
    rgba(255, 255, 255, 0) 100%,
    rgb(4, 120, 21) 100%
  );
`;
