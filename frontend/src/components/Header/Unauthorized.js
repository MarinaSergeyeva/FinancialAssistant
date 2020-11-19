import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import Logo from './Logo';

const Unauthorized = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <p>Finance</p>
        <Tablet>
          <ButtonWrapper>
            <ButtonSignIn>Войти</ButtonSignIn>
            <ButtonSignUp>Регистрация</ButtonSignUp>
          </ButtonWrapper>
        </Tablet>
        <Desktop>
          <ButtonWrapper>
            <ButtonSignIn>Войти</ButtonSignIn>
            <ButtonSignUp>Регистрация</ButtonSignUp>
          </ButtonWrapper>
        </Desktop>
      </NavigationContainer>
    </>
  );
};

export default Unauthorized;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0px 1px 0px #e5e9f2;

  @media ${device.tablet} {
    width: 768px;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    position: relative;
    width: 1280px;
    margin: 0 auto;
  }

  & p {
    padding-top: 8px;
    display: block;
    min-width: 74px;
    height: auto;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    color: #18191f;
    margin-left: 8px;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 17px;
  margin-right: 55px;

  @media ${device.tablet} {
    margin-right: 40px;
  }

  @media ${device.desktop} {
    margin-right: 55px;
  }
`;
const ButtonSignIn = styled.button`
  width: 100px;
  height: 40px;
  background: rgb(227, 234, 255, 1);
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 22px;
`;

const ButtonSignUp = styled.button`
  width: 100px;
  height: 40px;
  background: rgb(255, 108, 0, 1);
  color: rgb(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const LogoContainer = styled.div`
  padding-top: 8px;
  margin-left: 20px;
  margin-bottom: 18px;

  @media ${device.tablet} {
    margin-left: 40px;
    margin-bottom: 24px;
  }

  @media ${device.desktop} {
    margin-left: 55px;
  }
`;
