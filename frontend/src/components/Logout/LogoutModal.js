import React from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';
import { ButtonExit, ButtonStay, LogoutWrapper } from './logoutModalStyled';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const LogoutModal = props => {
  const dispatch = useDispatch();
  const { isDesktopDevice } = useDeviceSizes();

  const logoutUser = async () => {
    !isDesktopDevice && props.showNavigation();
    await dispatch(authOperations.userLogout());
  };

  return (
    <LogoutWrapper>
      <p className="modalTitle">
        Вы действительно хотите покинуть наше чудесное приложение?
      </p>
      <ButtonStay className="btn" onClick={props.closeModal}>
        Нет, я останусь
      </ButtonStay>
      <ButtonExit className="btn" onClick={logoutUser}>
        Да, но я скоро вернусь
      </ButtonExit>
    </LogoutWrapper>
  );
};

export default LogoutModal;
