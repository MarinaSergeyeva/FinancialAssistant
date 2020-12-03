import React from 'react';
import {
  ErrorBackgroundImg,
  ErrorBackgroundWrapper,
  ErrorWrapper,
} from '../../../common/globalStyleComponents';
import backgroundErrorImg from '../../../assets/icons/Error/error.svg';

const ModalResultError = () => {
  return (
    <ErrorWrapper>
      <p> Произошла ошибка!</p>
      <span>Обратитесь к администратору!</span>
      <ErrorBackgroundWrapper />
      <ErrorBackgroundImg src={backgroundErrorImg} alt="background img" />
    </ErrorWrapper>
  );
};

export default ModalResultError;
