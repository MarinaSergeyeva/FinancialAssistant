import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const CongratulationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
    color: #7c9af2;
    padding-top: 40px;
    margin-bottom: 40px;
  }

  & span {
    width: 120px;
    flex-wrap: wrap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(24, 25, 31, 0.87);
  }

  @media ${device.largeDevice} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }
`;

export const CongratulationBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
`;

export const CongratulationBackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media ${device.largeDevice} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
