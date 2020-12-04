import React from 'react';
import {
  CongratulationBackgroundImg,
  CongratulationWrapper,
} from '../../../common/globalStyleComponents';
import { ButtonModal } from './ModalResultSuccessStyle';
import mobileBackgroundImg from '../../../assets/images/Congratulation/mobileCongratulation.svg';
import backgroundImg from '../../../assets/images/Congratulation/congratulation.svg';
import useDeviceSizes from '../../../hooks/useDeviceSizes';

const ModalResultSuccess = ({
  closeModal,
  showLoginModal,
  setSuccessModal,
}) => {
  const switchModals = () => {
    setSuccessModal(false);
    showLoginModal(true);
  };

  const closeModalSuccess = () => {
    closeModal();
  };

  const { isMobileDevice } = useDeviceSizes();

  return (
    <CongratulationWrapper>
      <p>Ура!</p>
      <p>Вы успешно зарегистрировались!</p>
      <span>
        Пожалуйста, <b>войдите</b> на сайт
      </span>
      <ButtonModal type="button" onClick={closeModalSuccess}>
        Назад
      </ButtonModal>
      <ButtonModal type="button" onClick={switchModals}>
        Войти
      </ButtonModal>
      <CongratulationBackgroundImg
        src={isMobileDevice ? mobileBackgroundImg : backgroundImg}
        alt="background img"
      />
    </CongratulationWrapper>
  );
};

export default ModalResultSuccess;
