import React from 'react';
// import gapi from 'gapi';
import mainPictureMobile from '../../assets/images/mainPagePic/mainpagemobile.png';
import mainPictureTablet from '../../assets/images/mainPagePic/mainpagetablet.png';
import mainPictureDesktop from '../../assets/images/mainPagePic/mainpagedesktop.png';
import googleLogo from '../../assets/images/mainPagePic/googlemobile.png';
import facebookLogo from '../../assets/images/mainPagePic/facebookmobile.png';
import { Desktop, Mobile, Tablet } from '../../common/deviceSizes';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import {
  AuthContainer,
  AuthParagraph,
  FacebookAuthBtn,
  FacebookAuthBtnImg,
  GoogleAuthBtn,
  GoogleAuthBtnImg,
  MainPageContainer,
  MainPageImg,
  MainPageTitile,
  MainPageTitileOrange,
} from './mainPageStyled';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';

// const path = require('path');
// require('dotenv').config({ path: path.join('../../../../backend/.env') });

const MainPage = () => {
  const [userInfoRegistr, setUserInfoRegistr] = useHandleBoolChange(true);

  return (
    <>
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
        <GoogleAuthBtn href="https://financial-assistant-bc22.herokuapp.com/api/v1/auth/google">
          <GoogleAuthBtnImg
            src={googleLogo}
            alt="google auth picture"
          ></GoogleAuthBtnImg>
          Sign up with Google
        </GoogleAuthBtn>
        {/* <FacebookAuthBtn href="https://financial-assistant-bc22.herokuapp.com/api/v1/auth/facebook">
          <FacebookAuthBtnImg
            src={facebookLogo}
            alt="facebook auth picture"
          ></FacebookAuthBtnImg>
          Sign up with Facebook
        </FacebookAuthBtn> */}

        <Mobile>
          <AuthContainer>
            {!userInfoRegistr && (
              <>
                <Registration />
                <AuthParagraph>
                  Уже есть аккаунт?
                  <span onClick={setUserInfoRegistr}>Войти</span>
                </AuthParagraph>
              </>
            )}

            {userInfoRegistr && (
              <>
                <Login />
                <AuthParagraph>
                  Еще нет аккаунта?
                  <span onClick={setUserInfoRegistr}>Зарегистрироваться</span>
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
    </>
  );
};

export default MainPage;
