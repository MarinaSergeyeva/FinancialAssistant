import React from 'react';
import {
  CongratulationBackgroundImg,
  CongratulationBackgroundWrapper,
  CongratulationWrapper,
} from '../../../common/globalStyleComponents';
import mobileBackgroundImg from '../../../assets/images/Congratulation/mobileCongratulation.svg';

const ModalResultSuccess = () => {
  return (
    <CongratulationWrapper>
      <p>Ура! Поздравляем!</p>
      <span>Вы на 1 кв. м. ближе к мечте! Продолжайте двигаться дальше!</span>
      <CongratulationBackgroundWrapper />
      <CongratulationBackgroundImg
        src={mobileBackgroundImg}
        alt="background img"
      />
    </CongratulationWrapper>
  );
};

export default ModalResultSuccess;
