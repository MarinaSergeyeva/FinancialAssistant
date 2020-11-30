import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import gapi from 'gapi';
import mainPictureMobile from '../../assets/images/mainPagePic/mainpagemobile.png';
import mainPictureTablet from '../../assets/images/mainPagePic/mainpagetablet.png';
import mainPictureDesktop from '../../assets/images/mainPagePic/mainpagedesktop.png';
import googleLogo from '../../assets/images/mainPagePic/googlemobile.png';
import facebookLogo from '../../assets/images/mainPagePic/facebookmobile.png';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import { useSelector } from 'react-redux';

const path = require('path');
require('dotenv').config({ path: path.join('../../../../backend/.env') });

const MainPage = () => {
  const userInfo = useSelector(state => state.auth.username);

  const [userInfoRegistr, setUserInfoRegistr] = useState(
    userInfo ? true : false,
  );

  useEffect(() => {
    if (userInfo) {
      setUserInfoRegistr(true);
    } else {
      setUserInfoRegistr(false);
    }
  }, [userInfo]);

  return (
    <MainPageContainer>
      <Mobile>
        <MainPageTitile>
          Планировщик для совместного
          <MainPageTitileOrange> накопления</MainPageTitileOrange> на квартиру
        </MainPageTitile>
      </Mobile>
      <Tablet>
        <MainPageTitile>
          Планировщик для совместного
          <MainPageTitileOrange> накопления</MainPageTitileOrange> на квартиру
        </MainPageTitile>
      </Tablet>
      <Desktop>
        <MainPageTitile>
          Планировщик <br /> для совместного
          <MainPageTitileOrange> накопления</MainPageTitileOrange> на квартиру
        </MainPageTitile>
      </Desktop>
      <GoogleAuthBtn href="http:/localhost:8080/api/v1/auth/google">
        <GoogleAuthBtnImg
          src={googleLogo}
          alt="google auth picture"
        ></GoogleAuthBtnImg>
        Sign up with Google
      </GoogleAuthBtn>
      <FacebookAuthBtn href="https://financial-assistant-bc22.herokuapp.com/api/v1/auth/facebook">
        <FacebookAuthBtnImg
          src={facebookLogo}
          alt="facebook auth picture"
        ></FacebookAuthBtnImg>
        Sign up with Facebook
      </FacebookAuthBtn>

      <Mobile>
        <AuthContainer>
          {!userInfoRegistr && (
            <>
              <Registration />
              <AuthParagraph>
                Уже есть аккаунт?
                <span
                  onClick={() => {
                    setUserInfoRegistr(true);
                  }}
                >
                  Войти
                </span>
              </AuthParagraph>
            </>
          )}

          {userInfoRegistr && (
            <>
              <Login />
              <AuthParagraph>
                Еще нет аккаунта?
                <span
                  onClick={() => {
                    setUserInfoRegistr(false);
                  }}
                >
                  Зарегистрироваться
                </span>
              </AuthParagraph>
            </>
          )}
        </AuthContainer>
      </Mobile>

      <Mobile>
        <MainPageImg
          src={mainPictureMobile}
          alt="main page picture"
        ></MainPageImg>
      </Mobile>
      <Tablet>
        <MainPageImg
          src={mainPictureTablet}
          alt="main page picture"
        ></MainPageImg>
      </Tablet>
      <Desktop>
        <MainPageImg
          src={mainPictureDesktop}
          alt="main page picture"
        ></MainPageImg>
      </Desktop>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  padding-top: 34px;
  padding-bottom: 34px;
  width: 290px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding-top: 122px;
    padding-bottom: 122px;
    width: 545px;
  }
  @media ${device.desktop} {
    position: relative;
    padding-top: 70px;
    padding-bottom: 43px;
    width: 968px;
  }
`;

const MainPageTitile = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 34px;

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    width: 461px;
    font-size: 36px;
    line-height: 50px;
    text-align: left;
  }
`;

const MainPageTitileOrange = styled.span`
  color: #ff6c00;
`;

const GoogleAuthBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;
  width: 216px;
  height: 62px;
  background: rgba(255, 108, 0, 0.1);
  border-radius: 8px;
  border: none;
  margin: 0 auto;
  margin-bottom: 17px;
  padding-left: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;

  @media ${device.desktop} {
    margin: 0 0 16px 0;
  }
`;
const GoogleAuthBtnImg = styled.img`
  position: absolute;
  left: 15px;
`;

const FacebookAuthBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  width: 216px;
  height: 62px;
  background: #e3eaff;
  border-radius: 8px;
  margin: 0 auto;
  border: none;
  margin-bottom: 34px;
  padding-left: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;

  @media ${device.tablet} {
    margin-bottom: 64px;
  }

  @media ${device.desktop} {
    margin: 0;
  }
`;
const FacebookAuthBtnImg = styled.img`
  position: absolute;
  left: 15px;
`;

const MainPageImg = styled.img`
  display: block;
  margin: 0 auto;

  @media ${device.desktop} {
    position: absolute;
    top: 110px;
    right: -100px;
    z-index: -1;
    max-height: calc(100vh - 196px);
  }
`;

//!Auth
const AuthContainer = styled.div``;

const AuthParagraph = styled.p`
  text-align: center;
  color: rgba(24, 25, 31, 0.54);
  font-size: 12px;
  & span {
    font-weight: 800;
    color: #000;
  }
`;
