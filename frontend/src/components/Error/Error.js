import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import backgroundErrorImg from '../../assets/icons/Error/error.svg';

const Error = () => {
  return (
    <ErrorWrapper>
      <Mobile>
        <p> Произошла ошибка!</p>
        <span>Обратитесь к администратору!</span>
        <ErrorBackgroundWrapper />
        <ErrorBackgroundImg src={backgroundErrorImg} alt="background img" />
      </Mobile>

      <Tablet>
        <p>Произошла ошибка!</p>
        <span>Обратитесь к администратору!</span>
        <ErrorBackgroundWrapper />
        <ErrorBackgroundImg src={backgroundErrorImg} alt="background img" />
      </Tablet>

      <Desktop>
        <p>Произошла ошибка!</p>
        <span>Обратитесь к администратору!</span>
        <ErrorBackgroundWrapper />
        <ErrorBackgroundImg src={backgroundErrorImg} alt="background img" />
      </Desktop>
    </ErrorWrapper>
  );
};

export default Error;

const ErrorWrapper = styled.div`
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
    color: #ff2e00;
    padding-top: 110px;
  }

  & span {
    width: 215px;
    height: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ff2e00;
    margin-top: 40px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
      padding-top: 100px;
    }

    & span {
      width: 310px;
      margin-top: 40px;
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

const ErrorBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
`;

const ErrorBackgroundImg = styled.img`
  position: absolute;
  top: 35%;
  left: 53%;
  z-index: 1;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: 40%;
    left: 50%;
  }

  @media ${device.desktop} {
    top: 40%;
    left: 50%;
  }
`;
