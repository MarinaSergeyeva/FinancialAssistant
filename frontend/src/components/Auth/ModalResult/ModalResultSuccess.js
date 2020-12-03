import React from 'react';
import {
  CongratulationBackgroundImg,
  CongratulationWrapper,
} from '../../../common/globalStyleComponents';
import { ButtonModal } from './ModalResultSuccessStyle';
import mobileBackgroundImg from '../../../assets/images/Congratulation/mobileCongratulation.svg';

const ModalResultSuccess = ({
  closeModal,
  showLoginModal,
  setSuccessModal,
}) => {
  const switchModals = () => {
    setSuccessModal(false);
    showLoginModal(true);
  };

  return (
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
      <ButtonModal type="button" onClick={switchModals}>
        Войти
      </ButtonModal>
      <CongratulationBackgroundImg
        src={mobileBackgroundImg}
        alt="background img"
      />
    </CongratulationWrapper>
  );
};

export default ModalResultSuccess;
