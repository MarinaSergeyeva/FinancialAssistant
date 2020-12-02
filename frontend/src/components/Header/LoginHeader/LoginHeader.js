import React from 'react';
import Modal from '../../Modal/Modal';
import Registration from '../../Auth/Registration/Registration';
import Login from '../../Auth/Login/Login';
import {
  ButtonLogin,
  ButtonRegistration,
  LoginHeaderWrapper,
} from './loginHeaderStyled';
import useLoginRegisterModal from './hooks/useLoginRegisterModal';

const LoginHeader = () => {
  const { status, setStatus } = useLoginRegisterModal();
  const { isShowRegistration, isShowLogin } = status;
  const { showModalAuth, closeRegistration, closeLogin } = setStatus;

  return (
    <>
      <LoginHeaderWrapper>
        <ButtonLogin className="btn" onClick={showModalAuth}>
          Войти
        </ButtonLogin>
        <ButtonRegistration className="btn" onClick={showModalAuth}>
          Регистрация
        </ButtonRegistration>
      </LoginHeaderWrapper>
      {isShowRegistration && (
        <Modal closeModal={closeRegistration}>
          <Registration closeModal={closeRegistration} />
        </Modal>
      )}
      {isShowLogin && (
        <Modal closeModal={closeLogin}>
          <Login closeModal={closeLogin} />
        </Modal>
      )}
    </>
  );
};

export default LoginHeader;
