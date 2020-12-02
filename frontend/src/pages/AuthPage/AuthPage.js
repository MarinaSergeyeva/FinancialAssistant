import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import MainPage from '../../components/MainPage/MainPage';
import action from '../../redux/actions/authAction';
import Modal from '../../components/Modal/Modal';
import ModalResultSuccess from '../../components/Auth/ModalResult/ModalResultSuccess';
import Login from '../../components/Auth/Login/Login';
import { device } from '../../common/deviceSizes';

const AuthPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    dispatch(action.loginSuccess({ token }));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const [successModal, setSuccessModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const userInfo = useSelector(state => state.auth.id);
  const [userInfoRegistr, setUserInfoRegistr] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setUserInfoRegistr(true);
      setSuccessModal(true);
    } else {
      setUserInfoRegistr(false);
      setSuccessModal(false);
    }

    if (loginModal) {
      setSuccessModal(false);
    }
  }, [userInfo]);

  const closeSuccessModal = () => {
    setSuccessModal(prev => !prev);
  };

  const isOnLargeTablet = useMediaQuery({
    query: device.largeTablet,
  });

  return (
    <>
      {userInfoRegistr && isOnLargeTablet && successModal && (
        <Modal closeModal={closeSuccessModal}>
          <ModalResultSuccess
            closeModal={closeSuccessModal}
            showLoginModal={setLoginModal}
            setSuccessModal={setSuccessModal}
          />
        </Modal>
      )}

      {isOnLargeTablet && loginModal && (
        <Modal closeModal={setLoginModal}>
          <Login closeModal={setLoginModal} />
        </Modal>
      )}
      <MainPage />
    </>
  );
};

export default AuthPage;
