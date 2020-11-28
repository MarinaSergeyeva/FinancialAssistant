import React from 'react';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
// import avatarImg from '../../assets/icons/Header/Avatar/avatar.png';
import avatarImg from '../../assets/icons/Header/Avatar/icon-user.svg';
import Logout from './Logout';
import { textColor } from '../../stylesheet/vars';
import { useSelector } from 'react-redux';
import { authSelector, userSelectors } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from './BurgerMenu';

const Userinfo = ({ showNavigation, setActive }) => {
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));
  const { username } = useSelector(state =>
    userSelectors.getCurrentUser(state),
  );
  // console.log('name', name);

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
        {isUserAuth && !isMobileDevice && (
          <p className="userName">{username}</p>
        )}
        {isDesktopDevice ? (
          <Logout showNavigation={showNavigation} />
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
  width: 48px;
  border-radius: 50%;
  margin-right: 18px;
  fill: ${textColor.secondary};

  @media ${device.tablet} {
    margin-right: 12px;
  }
`;
