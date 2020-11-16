import React, { useState } from 'react';
import Test from '../test/Test';
import MainPage from '../../components/MainPage/MainPage';
import Calculator from '../../components/Calculator/Calculator';

const AuthPage = () => {
  const [showCalculator, setShowCalculator] = useState(false)
  const showCalculatorHandler = () => {
    setShowCalculator(true)
  }
  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  };

  const close = () => {
    setIsShow(prev => !prev);
  };

  return (
    <>
      <button type="button" onClick={() => showModal()}>
        click me
      </button>
      <button type="button" onClick={() => showCalculatorHandler()}>
        calculator
      </button>
      {showCalculator && <Calculator/>}
      {isShow && <Test close={close} />}
      <MainPage />
    </>
  );
};

export default AuthPage;
