import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const ChartWrapperSC = styled.div`
  height: 527px;
  width: 280px;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 510px;
    height: 390px;
  }
  @media ${device.desktop} {
    width: 468px;
    height: 390px;
  }
`;

export const ChartTitle = styled.p`
  width: 230px;

  font-weight: 800;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  @media ${device.mobile} {
    margin: 0 0 30px;
  }
  @media ${device.tablet} {
    background-color: #f3f3f5;
    width: 510px;
    height: 70px;
    font-size: 20px;
    line-height: 70px;
  }
  @media ${device.desktop} {
    background-color: #f3f3f5;
    width: 468px;
    height: 70px;
    font-size: 20px;
    line-height: 70px;
  }
`;
