import React from 'react';
import backgroundErrorImg from '../../assets/icons/Error/error.svg';
import { ErrorBackgroundImg, ErrorWrapper } from './errorStyled';

const Error = () => {
  return (
    <ErrorWrapper>
      <p> Произошла ошибка!</p>
      <span>Обратитесь к администратору!</span>
      <ErrorBackgroundImg src={backgroundErrorImg} alt="background img" />
    </ErrorWrapper>
  );
};

export default Error;
