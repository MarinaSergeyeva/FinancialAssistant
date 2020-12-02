import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../../common/deviceSizes';
import { colors } from '../../../stylesheet/vars';

export const NavigationContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 280px;
    padding: 27px 00px;
  }
  @media ${device.tablet} {
    width: 768px;
    padding-top: 74px;
    padding-left: 316px;
    padding-right: 296px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    margin: 0;
    align-items: center;
  }
`;

export const StyleNavLInk = styled(NavLink)`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  font-weight: 700;
  color: rgb(16.5%, 21.2%, 23.1%);
  &:hover,
  :focus {
    color: ${colors.main};
  }

  &.active {
    color:${colors.main}
  }
  
  &:not(:last-child) {
      @media ${device.desktop} {   
    margin-right: 32px;
    }
  }

  &:not(:last-of-type) {
      margin-bottom: 20px;
    @media ${device.desktop} {   
      margin-bottom: 0px;
    }
  }

  &:last-of-type {
    margin-bottom: 34px;
    @media ${device.tablet} {
        margin-bottom: 74px;
      }
    @media ${device.desktop} {
        margin:0;
      }
    }
  }

  @media ${device.tablet} {
    &:last-of-type {
      margin-bottom: 74px;
    }
  }
`;

export const NavigationBgImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  max-height: calc(100vh - 350px);
`;
