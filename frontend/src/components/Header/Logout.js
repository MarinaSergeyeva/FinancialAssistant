import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import logoutImg from '../../assets/icons/Logout/logout.png';

const Logout = () => {
  return (
    <>
      <Mobile>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Mobile>

      <Tablet>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Tablet>

      <Desktop>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Desktop>
    </>
  );
};

export default Logout;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0 auto;
  padding-top: 16px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

const ButtonLogout = styled.button`
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
`;

const LogoutImg = styled.img`
  margin-left: 14px;
  background-size: cover;
`;
