import React, { useState } from 'react';
import Test from '../test/Test';
import MainPage from '../../components/MainPage/MainPage';
import Calculator from '../../components/Calculator/Calculator';
import Modal from '../../components/Modal/Modal';
import GiftCompleting from '../../components/GiftCompleting/GiftCompleting';

const AuthPage = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const showCalculatorHandler = () => {
    setShowCalculator(true);
  };

  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  };

  const closeModal = () => {
    setIsShow(false);
  };

  return (
    <>
      <button type="button" onClick={() => showModal()}>
        click me
      </button>
      <button type="button" onClick={() => showCalculatorHandler()}>
        calculator
      </button>
      {showCalculator && <Calculator />}
      {isShow && (
        <Modal closeModal={closeModal}>
          <Test />
        </Modal>
      )}

      <MainPage />
    </>
  );
};

export default AuthPage;
