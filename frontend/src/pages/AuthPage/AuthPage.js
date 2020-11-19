import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import device from "../../common/deviceSizes";
import MainPage from "../../components/MainPage/MainPage";
import Registration from "../../components/Auth/Registration/Registration";
import Login from "../../components/Auth/Login/Login";
import styled from "styled-components";
import Calculator from "../../components/Calculator/Calculator";
import Modal from "../../components/Modal/Modal";
import GiftCompleting from "../../components/GiftCompleting/GiftCompleting";
import Header from "../../components/Header/Header"


const AuthPage = () => {
  const [isShowRegistration, setIsShowRegistration] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const showModalAuth = (e) => {
    e.target.innerText === "Рeгистрация"
      ? setIsShowRegistration(true)
      : setIsShowLogin(true);
  };

  const showCalculatorHandler = () => {
    setShowCalculator(true);
  };

  const closeRegistration = () => {
    setIsShowRegistration(prev => !prev);
    // setIsShowLogin(prev => !prev);
  };

  const closeLogin = () => {
    setIsShowLogin((prev) => !prev);
  };

  const isOnBigDevice = useMediaQuery({
    query: device.largeDevice,
  });
  return (
    <>
    <Header/>
      {isOnBigDevice && (
        <>
          <Button type="button" onClick={(e) => showModalAuth(e)}>
            Рeгистрация
          </Button>
          <Button type="button" onClick={(e) => showModalAuth(e)}>
            Вход
          </Button>
        </>
      )}

      <button type="button" onClick={() => showCalculatorHandler()}>
        calculator
      </button>
      {showCalculator && <Calculator />}

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
      <MainPage />
    </>
  );
};

const Button = styled.button`
  margin: 10px;
  padding: 10px;
`;

export default AuthPage;
