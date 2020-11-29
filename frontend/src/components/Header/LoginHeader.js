import React, { useState } from 'react';
import styled from 'styled-components';
import { background, colors } from '../../stylesheet/vars';
import logoutImg from '../../assets/icons/Header/icon-logout.svg';
import Modal from '../Modal/Modal';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';

const LoginHeader = () => {
  const [isShowRegistration, setIsShowRegistration] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const showModalAuth = e => {
    e.target.innerText === 'Регистрация'
      ? setIsShowRegistration(true)
      : setIsShowLogin(true);
  };

  const closeRegistration = () => {
    setIsShowRegistration(prev => !prev);
  };

  const closeLogin = () => {
    setIsShowLogin(prev => !prev);
  };

  return (
    <>
      <LoginHeaderWrapper>
        <ButtonLogin className="btn" onClick={e => showModalAuth(e)}>
          Войти
        </ButtonLogin>
        <ButtonRegistration className="btn" onClick={e => showModalAuth(e)}>
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

const LoginHeaderWrapper = styled.div`
  .btn {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
`;
const ButtonLogin = styled.button`
  background: ${background.logout};
  color: rgba(24, 25, 31);
  margin-right: 14px;
`;
const ButtonRegistration = styled.button`
  background: ${colors.main};
  color: rgba(255, 255, 255);
`;

export default LoginHeader;
