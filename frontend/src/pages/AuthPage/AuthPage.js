import React, { useState } from 'react';
import Test from '../test/Test';
import MainPage from '../../components/MainPage/MainPage';
import Modal from '../../components/Modal/Modal';

const AuthPage = () => {
  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  };

  const closeModal = () => {
    setIsShow(false);
  };

  return (
    <>
      <button type="button" onClick={showModal}>
        click me
      </button>
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
