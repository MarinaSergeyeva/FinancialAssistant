import React from 'react';
import styled from 'styled-components';
import {
  CongratulationBackgroundImg,
  CongratulationBackgroundWrapper,
  CongratulationWrapper,
} from '../../../common/globalStyleComponents';
import mobileBackgroundImg from '../../../assets/images/Congratulation/mobileCongratulation.svg';

const ModalResultSuccess = ({ closeModal, showLoginModal, setSuccessModal }) => {

  const switchModals = () =>{
    setSuccessModal(false)
    showLoginModal(true)
  }

  return (
    <>
    <CongratulationWrapper>
      <p>Ура!</p>
      <p>Вы успешно зарегистрировались!</p>
      <span>
        Пожалуйста, <b>войдите</b> на сайт
      </span>

      <ButtonModal
        type="button"
        onClick={() => {
          closeModal();
        }}
      >
        Назад
      </ButtonModal>
      <ButtonModal type="button" onClick={switchModals}>Войти</ButtonModal>
      <CongratulationBackgroundImg
        src={mobileBackgroundImg}
        alt="background img"
      />
    </CongratulationWrapper>
    </>
  );
};

const ButtonModal = styled.button`
  width: 100px;
  height: 40px;
  background: rgb(227, 234, 255, 1);
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 22px;
  z-index: 3;
  color: black;
  &:hover {
    box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
      0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default ModalResultSuccess;
