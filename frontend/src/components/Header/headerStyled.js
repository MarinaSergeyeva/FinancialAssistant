import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const HeaderContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 17px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e9f2;

  @media ${device.tablet} {
    width: 690px;
  }

  @media ${device.desktop} {
    width: 1170px;
  } ;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
