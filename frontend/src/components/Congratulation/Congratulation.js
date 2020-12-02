import React from 'react';
import mobileBackgroundImg from '../../assets/images/Congratulation/mobileCongratulation.svg';
import backgroundImg from '../../assets/images/Congratulation/congratulation.svg';
import {
  CongratulationBackgroundImg,
  CongratulationWrapper,
} from './congratulationStyled';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const Congratulation = () => {
  const { isMobileDevice } = useDeviceSizes();
  return (
    <CongratulationWrapper>
      <p>Ура! Поздравляем!</p>
      <span>Вы на 1 кв. м. ближе к мечте! Продолжайте двигаться дальше!</span>
      <CongratulationBackgroundImg
        src={isMobileDevice ? mobileBackgroundImg : backgroundImg}
        alt="background img"
      />
    </CongratulationWrapper>
  );
};

export default Congratulation;
