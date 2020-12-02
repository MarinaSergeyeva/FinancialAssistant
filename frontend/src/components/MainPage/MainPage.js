import React from 'react';
// import gapi from 'gapi';
import mainPictureMobile from '../../assets/images/mainPagePic/mainpagemobile.png';
import mainPictureTablet from '../../assets/images/mainPagePic/mainpagetablet.png';
import mainPictureDesktop from '../../assets/images/mainPagePic/mainpagedesktop.png';
import googleLogo from '../../assets/images/mainPagePic/googlemobile.png';
import facebookLogo from '../../assets/images/mainPagePic/facebookmobile.png';
import { Mobile } from '../../common/deviceSizes';
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
  MainPageTitle,
  MainPageTitleOrange,
} from './mainPageStyled';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const MainPage = () => {
  const [userInfoRegistr, setUserInfoRegistr] = useHandleBoolChange(true);
  const { isMobileDevice, isTabletDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <MainPageContainer>
      <MainPageTitle>
        Планировщик{isDesktopDevice ? <br /> : ''} для совместного
        <MainPageTitleOrange> накопления</MainPageTitleOrange> на квартиру
      </MainPageTitle>
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

      <MainPageImg
        src={
          (isMobileDevice && mainPictureMobile) ||
          (isTabletDevice && mainPictureTablet) ||
          (isDesktopDevice && mainPictureDesktop)
        }
        alt="main page picture"
      />
    </MainPageContainer>
  );
};

export default MainPage;
