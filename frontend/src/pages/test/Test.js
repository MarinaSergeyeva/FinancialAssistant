import React from 'react';
import styled from 'styled-components';
import picture from '../test/Man-Silhouette.jpg';
import modalBackDrop from '../../components/ModalBackDrop/ModalBackDrop';

const Test = () => {
  return (
    <>
      <Testtesttest src={picture} />
    </>
  );
};

export default modalBackDrop(Test);

const Testtesttest = styled.img`
  width: 500px;
  height: 500px;
`;
