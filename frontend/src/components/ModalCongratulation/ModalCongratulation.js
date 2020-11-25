import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/images/ModalCongratulation/ModalCongratulation.svg';

const ModalCongratulation = () => {
  return (
    <ModalWrapper>
      <p>Ура! Поздравляем!</p>
      <ModalBackgroundImg src={backgroundImg} alt="background img" />
    </ModalWrapper>
  );
};

export default ModalCongratulation;

const ModalWrapper = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
  position: absolute;
  top: 50px;
  left: 500px;
  z-index: -1;
  /* position: absolute;
  height: 20px;
  left: 21.88%;
  right: 21.88%; */
  /* top: 50px;
  left: 500px; */
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #7c9af2;
`;

const ModalBackgroundImg = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50px;
  left: 500px;
  z-index: -1;
`;
