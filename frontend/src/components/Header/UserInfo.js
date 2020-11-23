import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import avatarImg from '../../assets/icons/Header/Avatar/avatar.png';
import burgerMenu from '../../assets/icons/Header/burger-menu.svg';
import Logout from './Logout';
import { colors, textColor } from '../../stylesheet/vars';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';

const Userinfo = ({ showNavigation }) => {
  const isUserAuth = useSelector(state => state.auth.token);

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  return (
    <>
      <UserinfoContainer>
        <AvatarImg src={avatarImg} alt="avatar img"></AvatarImg>
        {isUserAuth && !isMobileDevice && <p className="userName">Nickname</p>}
        {!isDesktopDevice && (
          <BurgerMenu
            src={burgerMenu}
            alt="menu icon"
            onClick={showNavigation}
          ></BurgerMenu>
        )}
        {isDesktopDevice && <Logout />}
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

const BurgerMenu = styled.img`
  width: 24px;
  height: 16px;
  fill: ${textColor.secondary};
  fill-opacity: 0.56;
  cursor: pointer;

  &:hover,
  :focus {
    fill: ${colors.main};
  }
`;
