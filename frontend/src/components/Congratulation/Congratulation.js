import React from 'react';
import styled from 'styled-components';
import { device, Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import mobileBackgroundImg from '../../assets/images/Congratulation/mobileCongratulation.svg';
import backgroundImg from '../../assets/images/Congratulation/congratulation.svg';

const Congratulation = () => {
  return (
    <CongratulationWrapper>
      <Mobile>
        <p>Ура! Поздравляем!</p>
        <span>Вы на 1 кв. м. ближе к мечте! Продолжайте двигаться дальше!</span>
        <CongratulationBackgroundWrapper />
        <CongratulationBackgroundImg
          src={mobileBackgroundImg}
          alt="background img"
        />
      </Mobile>

      <Tablet>
        <p>Ура! Поздравляем!</p>
        <span>Вы на 1 кв. м. ближе к мечте! Продолжайте двигаться дальше!</span>
        <CongratulationBackgroundWrapper />
        <CongratulationBackgroundImg src={backgroundImg} alt="background img" />
      </Tablet>

      <Desktop>
        <p>Ура! Поздравляем!</p>
        <span>Вы на 1 кв. м. ближе к мечте! Продолжайте двигаться дальше!</span>
        <CongratulationBackgroundWrapper />
        <CongratulationBackgroundImg src={backgroundImg} alt="background img" />
      </Desktop>
    </CongratulationWrapper>
  );
};

export default Congratulation;

const CongratulationWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 280px;
  height: 303px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #7c9af2;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  & p {
    min-width: 120px;
    height: 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #7c9af2;
    padding-top: 40px;
  }

  & span {
    width: 215px;
    height: auto;
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(24, 25, 31, 0.87);
    margin-top: 40px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }

  @media ${device.desktop} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }
`;

const CongratulationBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
`;

const CongratulationBackgroundImg = styled.img`
  position: absolute;
  top: 45%;
  left: 53%;
  z-index: 1;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
  }

  @media ${device.desktop} {
    top: 50%;
    left: 50%;
  }
`;
