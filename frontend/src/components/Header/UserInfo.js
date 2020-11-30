import React from 'react';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AvatarImgIcon } from '../../assets/icons/Header/Avatar/icon-user.svg';
import Logout from './Logout';
import { colors, textColor } from '../../stylesheet/vars';
import { useSelector } from 'react-redux';
import { authSelector, userSelectors } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from './BurgerMenu';

const Userinfo = ({ showNavigation, isNavigationOn }) => {
  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));
  const { username } = useSelector(state =>
    userSelectors.getCurrentUser(state),
  );

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  return (
    <>
      <UserinfoContainer>
        {/* <StyleNavLInk to="/profile"> */}
        <UserInfoWrapper>
          <AvatarImgIconStyled>
            <AvatarImgIcon className="avatar-icon" />
          </AvatarImgIconStyled>
          {isUserAuth && !isMobileDevice && (
            <p className="userName">{username}</p>
          )}
        </UserInfoWrapper>
        {/* </StyleNavLInk> */}

        {isDesktopDevice ? (
          <Logout showNavigation={showNavigation} />
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

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleNavLInk = styled(NavLink);

const AvatarImgIconStyled = styled.svg`
  width: 48px;
  height: 48px;
  //   border-radius: 50%;
  fill: ${colors.secondary};
  margin-right: 18px;

  @media ${device.tablet} {
    margin-right: 12px;
  }
`;
