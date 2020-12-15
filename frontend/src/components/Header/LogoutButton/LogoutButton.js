import React from 'react';
import Modal from '../../Modal/Modal';
import LogoutModal from '../../Logout/LogoutModal';
import IconLogout from '../../Icons/IconLogout';
import useHandleBoolChange from '../../../hooks/useHandleBoolChange';
import { ButtonLogout, LogoutImg } from './logoutButtonStyled';

const LogoutButton = ({ showNavigation }) => {
  const [showExitModal, showExitModalHandler] = useHandleBoolChange(false);

  return (
    <>
      <ButtonLogout onClick={showExitModalHandler}>
        Выйти
        <LogoutImg>
          <IconLogout />
        </LogoutImg>
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
