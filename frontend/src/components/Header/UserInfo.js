import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import avatarImg from '../../assets/icons/Header/Avatar/avatar.png';
import burgerMenu from '../../assets/icons/Header/burger-menu.svg';
import Logout from './Logout';
import { textColor } from '../../stylesheet/vars';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';

const Userinfo = () => {
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
          <BurgerMenu src={burgerMenu} alt="menu icon"></BurgerMenu>
        )}
        {isDesktopDevice && <Logout />}
      </UserinfoContainer>

      {/* <Mobile>
        <UserinfoContainer>
          <AvatarWrapper>
            <AvatarImg src={avatarImg} alt="avatar img"></AvatarImg>
          </AvatarWrapper>
        </UserinfoContainer>
        <Logout />
      </Mobile>

      <Tablet>
        <UserinfoContainer>
          <AvatarWrapper>
            <AvatarImg src={avatarImg} alt="avatar img"></AvatarImg>
          </AvatarWrapper>
          <span>Nickname</span>
        </UserinfoContainer>
        <Logout />
      </Tablet>

      <Desktop>
        <UserinfoContainer>
          <AvatarWrapper>
            <AvatarImg src={avatarImg} alt="avatar img"></AvatarImg>
          </AvatarWrapper>
          <span>Nickname</span>
        </UserinfoContainer>
        <Logout />
      </Desktop> */}
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
  /* & span {
    width: 63px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: rgba(24, 25, 31, 0.87);
    padding-top: 14px;
    margin-left: 12px;
    word-wrap: break-word;
  } */
`;

// const AvatarWrapper = styled.div`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
// `;
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
`;
