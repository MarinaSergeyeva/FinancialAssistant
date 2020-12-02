import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const MainPageContainer = styled.div`
  padding-top: 34px;
  padding-bottom: 34px;
  width: 290px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding-top: 122px;
    padding-bottom: 122px;
    width: 545px;
  }
  @media ${device.desktop} {
    position: relative;
    padding-top: 70px;
    padding-bottom: 43px;
    width: 968px;
  }
`;

export const MainPageTitile = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 34px;

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    width: 461px;
    font-size: 36px;
    line-height: 50px;
    text-align: left;
  }
`;

export const MainPageTitileOrange = styled.span`
  color: #ff6c00;
`;

export const GoogleAuthBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;
  width: 216px;
  height: 62px;
  background: rgba(255, 108, 0, 0.1);
  border-radius: 8px;
  border: none;
  margin: 0 auto;
  margin-bottom: 17px;
  padding-left: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;

  @media ${device.desktop} {
    margin: 0 0 16px 0;
  }
`;
export const GoogleAuthBtnImg = styled.img`
  position: absolute;
  left: 15px;
`;

export const FacebookAuthBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  width: 216px;
  height: 62px;
  background: #e3eaff;
  border-radius: 8px;
  margin: 0 auto;
  border: none;
  margin-bottom: 34px;
  padding-left: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;

  @media ${device.tablet} {
    margin-bottom: 64px;
  }

  @media ${device.desktop} {
    margin: 0;
  }
`;
export const FacebookAuthBtnImg = styled.img`
  position: absolute;
  left: 15px;
`;

export const MainPageImg = styled.img`
  display: block;
  margin: 0 auto;

  @media ${device.desktop} {
    position: absolute;
    top: 110px;
    right: -100px;
    z-index: -1;
    max-height: calc(100vh - 196px);
  }
`;

//!Auth
export const AuthContainer = styled.div``;

export const AuthParagraph = styled.p`
  text-align: center;
  color: rgba(24, 25, 31, 0.54);
  font-size: 12px;
  & span {
    font-weight: 800;
    color: #000;
  }
`;
