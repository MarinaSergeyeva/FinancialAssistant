import React from 'react';
import { Mobile } from '../../common/deviceSizes';
import mainPictureMobile from '../../assets/images/mainPagePic/mainpagemobile.png';
import mainPictureTablet from '../../assets/images/mainPagePic/mainpagetablet.png';
import mainPictureDesktop from '../../assets/images/mainPagePic/mainpagedesktop.png';
import googleLogo from '../../assets/images/mainPagePic/googlemobile.png';
import ModalResultSuccess from '../Auth/ModalResult/ModalResultSuccess';
import Registration from '../Auth/Registration/Registration';
import Login from '../Auth/Login/Login';
import Modal from '../Modal/Modal';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import useUserInfoAuth from './hooks/useUserInfoAuth';
import useSuccessModal from './hooks/useSuccessModal';
import useLoginModal from './hooks/useLoginModal';
import {
  AuthContainer,
  AuthParagraph,
  GoogleAuthBtn,
  GoogleAuthBtnImg,
  MainPageContainer,
  MainPageImg,
  MainPageTitle,
  MainPageTitleOrange,
} from './mainPageStyled';

const MainPage = () => {
  const {
    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
    isLargeTablet,
  } = useDeviceSizes();
  const [userInfoRegistr, setUserInfoRegistr] = useUserInfoAuth(false);
  const [successModal, setSuccessModal] = useSuccessModal(userInfoRegistr);
  const [loginModal, setLoginModal] = useLoginModal(setSuccessModal);

  const closeSuccessModal = () => {
    setSuccessModal(prev => !prev);
  };

  const switchMobileForm = () => {
    setUserInfoRegistr(prev => !prev);
  };

  return (
    <>
      {userInfoRegistr && isLargeTablet && successModal && (
        <Modal closeModal={closeSuccessModal}>
          <ModalResultSuccess
            closeModal={closeSuccessModal}
            showLoginModal={setLoginModal}
            setSuccessModal={setSuccessModal}
          />
        </Modal>
      )}

      {isLargeTablet && loginModal && (
        <Modal closeModal={setLoginModal}>
          <Login closeModal={setLoginModal} />
        </Modal>
      )}

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
        <Mobile>
          <AuthContainer>
            {!userInfoRegistr && (
              <>
                <Registration />
                <AuthParagraph>
                  Уже есть аккаунт?
                  <span onClick={switchMobileForm}>Войти</span>
                </AuthParagraph>
              </>
            )}

            {userInfoRegistr && (
              <>
                <Login />
                <AuthParagraph>
                  Еще нет аккаунта?
                  <span onClick={switchMobileForm}>Зарегистрироваться</span>
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
    </>
  );
};

export default MainPage;
