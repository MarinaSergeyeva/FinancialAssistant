import React from 'react';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import avatarImg from '../../assets/icons/Header/Avatar/avatar.png';
import Logout from './Logout';
import { textColor } from '../../stylesheet/vars';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from './BurgerMenu';

const Userinfo = ({ showNavigation, setActive }) => {
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  // const setActive = () => {
  //   document.querySelector('.burger-wrapper').onclick = function () {
  //     document.querySelector('.burger').classList.toggle('burger-active');
  //     showNavigation();
  //   };
  // };

  return (
    <>
      <UserinfoContainer>
        <AvatarImg src={avatarImg} alt="avatar img"></AvatarImg>
        {isUserAuth && !isMobileDevice && <p className="userName">Nickname</p>}
        {isDesktopDevice ? (
          <Logout />
        ) : (
          <BurgerMenu showNavigation={showNavigation} />
        )}
      </UserinfoContainer>
    </>
  );
};

export default Userinfo;

const UserinfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }

  .userName {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${textColor.third};
    margin-right: 32px;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  margin-right: 18px;

  @media ${device.tablet} {
    margin-right: 12px;
  }
`;
