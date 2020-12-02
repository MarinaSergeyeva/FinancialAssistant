import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const Wrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding-top: 34px;
  padding-bottom: 34px;
  padding-right: 27px;
  padding-left: 27px;
  margin: 0 auto;
  width: 280px;
  height: 388px;
  @media ${device.largeTablet} {
    padding-top: 50px;
    padding-bottom: 48px;
    padding-left: 44px;
    padding-right: 70px;
    width: 510px;
    height: 258px;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.largeDesktop} {
    width: 570px;
    padding-left: 70px;
    padding-right: 80px;
  }
`;

export const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 23px;
  width: 208px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #18191f;
  @media ${device.largeTablet} {
    padding-top: 10px;
  }
`;

export const Quantity = styled.span`
  color: #ff6c00;
`;

export const Price = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #18191f;
  margin-bottom: 24px;
  @media ${device.largeTablet} {
    margin-bottom: 0px;
  }
`;

export const ImgWrapper = styled.div`
  width: 159px;
  margin: 0 auto;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  @media ${device.largeDesktop} {
    margin-right: 54px;
  }
`;
