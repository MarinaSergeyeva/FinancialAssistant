import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import avatarImg from '../../assets/icons/Avatar/avatar.png';
import Logout from './Logout';

const Userinfo = () => {
  return (
    <>
      <Mobile>
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
      </Desktop>
    </>
  );
};

export default Userinfo;

const UserinfoContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 16px;
  display: flex;
  margin-left: 278px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }

  & span {
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
  }
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
`;
const AvatarImg = styled.img`
  background-size: cover;
  background: #c4c4c4;
  border-radius: 32px;
`;
