import React from 'react';
import { Desktop, Mobile, Tablet } from '../../common/deviceSizes';
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
  MainPageTitile,
  MainPageTitileOrange,
} from './mainPageStyled';

const MainPage = () => {
  const [userInfoRegistr, setUserInfoRegistr] = useUserInfoAuth(false);
  const [successModal, setSuccessModal] = useSuccessModal(userInfoRegistr);
  const [loginModal, setLoginModal] = useLoginModal(setSuccessModal);
  const { isLargeTablet } = useDeviceSizes();

  const closeSuccessModal = () => {
    setSuccessModal(prev => !prev);
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
