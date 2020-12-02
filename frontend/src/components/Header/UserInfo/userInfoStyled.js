import styled from 'styled-components';
import { device } from '../../../common/deviceSizes';
import { colors, textColor } from '../../../stylesheet/vars';

export const UserinfoContainer = styled.div`
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

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarImgIconStyled = styled.svg`
  width: 48px;
  height: 48px;
  fill: ${colors.secondary};
  margin-right: 18px;

  @media ${device.tablet} {
    margin-right: 12px;
  }
`;

export const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 18px;

  @media ${device.tablet} {
    margin-right: 12px;
  }
`;
