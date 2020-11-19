import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import Logo from './Logo';
import Userinfo from './UserInfo';

const Authorized = () => {
  return (
    <>
      <Mobile>
        <AuthorizedContainer>
          <StyleNavLInk to="/plan" exact>
            Персональный план
          </StyleNavLInk>
          <StyleNavLInk to="/expense" exact>
            Расходы
          </StyleNavLInk>
          <StyleNavLInk to="/dynamics" exact>
            Динамика
          </StyleNavLInk>

          <Userinfo />
        </AuthorizedContainer>
      </Mobile>

      <Tablet>
        <AuthorizedContainer>
          <StyleNavLInk to="/plan" exact>
            Персональный план
          </StyleNavLInk>

          <StyleNavLInk to="/expense" exact>
            Расходы
          </StyleNavLInk>

          <StyleNavLInk to="/dynamics" exact>
            Динамика
          </StyleNavLInk>
          <Userinfo />
        </AuthorizedContainer>
      </Tablet>

      <Desktop>
        <AuthorizedContainer>
          <StyleNavLInk to="/plan" exact>
            Персональный план
          </StyleNavLInk>

          <StyleNavLInk to="/expense" exact>
            Расходы
          </StyleNavLInk>

          <StyleNavLInk to="/dynamics" exact>
            Динамика
          </StyleNavLInk>
          <LogoContainer>
            <Logo />
            <p>Finance</p>
          </LogoContainer>
          <Userinfo />
        </AuthorizedContainer>
      </Desktop>
    </>
  );
};

export default Authorized;

const StyleNavLInk = styled(NavLink)`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding-top: 22px;
  padding-bottom: 24px;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: rgb(16.5%, 21.2%, 23.1%);
  &:hover {
    color: rgb(255, 108, 0, 1);
  }
  &:not(:first-child) {
    margin-left: 32px;
  }
`;

const AuthorizedContainer = styled.div`
  @media ${device.tablet} {
    width: 768px;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: flex-start;
    box-shadow: 0px 1px 0px #e5e9f2;
    padding-left: 55px;
    width: 1280px;
    margin: 0 auto;
    height: auto;
  }

  & p {
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
    padding-top: 8px;
  }
`;

const LogoContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 18px;
  display: flex;
  margin-left: 180px;
`;
