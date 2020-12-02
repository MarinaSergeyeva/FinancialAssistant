import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const ErrorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  width: 280px;
  height: 303px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #7c9af2;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  & p {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #ff2e00;
    padding-top: 110px;
    margin-bottom: 30px;
  }

  & span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ff2e00;
  }

  @media ${device.largeDevice} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
      padding-top: 100px;
    }
  }
`;

export const ErrorBackgroundImg = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;
