import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { background, colors } from '../../stylesheet/vars';
import authOperations from '../../redux/operations/authOperations';
import { device } from '../../common/deviceSizes';
import { useMediaQuery } from 'react-responsive';

const LogoutModal = props => {
  const dispatch = useDispatch();

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  const logoutUser = async () => {
    !isDesktopDevice && props.showNavigation();
    await dispatch(authOperations.userLogout());
  };

  return (
    <>
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
    </>
  );
};

export default LogoutModal;

const LogoutWrapper = styled.div`
  padding: 40px 30px 50px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;

  @media ${device.largeDevice} {
    width: 500px;
    height: 250px;
    padding: 70px;
  }

  .modalTitle {
    color: ${background.secondary};
    margin-bottom: 30px;
  }

  .btn {
    /* width: 100px; */
    padding: 10px 20px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
`;
const ButtonStay = styled.button`
  background: ${background.logout};
  color: rgba(24, 25, 31);
  margin-bottom: 20px;

  @media ${device.largeDevice} {
    margin-right: 14px;
  }
`;
const ButtonExit = styled.button`
  background: ${colors.main};
  color: rgba(255, 255, 255);
`;
