import React from 'react';
import logoutImg from '../../../assets/icons/Header/icon-logout.svg';
import Modal from '../../Modal/Modal';
import LogoutModal from '../../Logout/LogoutModal';
import useHandleBoolChange from '../../../hooks/useHandleBoolChange';
import { ButtonLogout, LogoutImg } from './logoutButtonStyled';

const LogoutButton = ({ showNavigation }) => {
  const [showExitModal, showExitModalHandler] = useHandleBoolChange(false);

  return (
    <>
      <ButtonLogout onClick={showExitModalHandler}>
        Выйти
        <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
      </ButtonLogout>
      {showExitModal && (
        <Modal closeModal={showExitModalHandler}>
          <LogoutModal
            closeModal={showExitModalHandler}
            showNavigation={showNavigation}
          />
        </Modal>
      )}
    </>
  );
};

export default LogoutButton;
