import React from 'react';
import {
  AvatarImg,
  AvatarImgIconStyled,
  UserinfoContainer,
  UserInfoWrapper,
} from './userInfoStyled';
import { ReactComponent as AvatarImgIcon } from '../../../assets/icons/Header/Avatar/icon-user.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import useReduxState from '../../../hooks/useReduxState';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import LogoutButton from '../LogoutButton/LogoutButton';

const Userinfo = ({ showNavigation, isNavigationOn }) => {
  const { isUserAuth, userInfo } = useReduxState();
  const { username, picture } = userInfo;

  const { isMobileDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <>
      <UserinfoContainer>
        <UserInfoWrapper>
          {picture === 'none' ? (
            <AvatarImgIconStyled>
              <AvatarImgIcon className="avatar-icon" />
            </AvatarImgIconStyled>
          ) : (
            <AvatarImg src={picture} alt="avatar" />
          )}
          {isUserAuth && !isMobileDevice && (
            <p className="userName">{username}</p>
          )}
        </UserInfoWrapper>

        {isDesktopDevice ? (
          <LogoutButton showNavigation={showNavigation} />
        ) : (
          <BurgerMenu
            showNavigation={showNavigation}
            isNavigationOn={isNavigationOn}
          />
        )}
      </UserinfoContainer>
    </>
  );
};

export default Userinfo;
