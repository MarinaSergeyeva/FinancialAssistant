import React, { useState } from 'react';
import Test from '../test/Test';
import MainPage from '../../components/MainPage/MainPage';
import Modal from '../../components/Modal/Modal';
import GiftCompleting from '../../components/GiftCompleting/GiftCompleting';

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
      {isShow && <GiftCompleting />}

      <MainPage />
    </>
  );
};

export default AuthPage;
