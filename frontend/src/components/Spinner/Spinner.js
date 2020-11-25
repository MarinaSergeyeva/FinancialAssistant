import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader type="TailSpin" color="#ff6c00" height={70} width={70} />
    </SpinnerWrapper>
  );
};

export default Spinner;

const SpinnerWrapper = styled.div`
  text-align: center;
`;
