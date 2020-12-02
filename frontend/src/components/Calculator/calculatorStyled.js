import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const RowD = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RowL = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CalculatorWrapper = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
  align-items: center;
  height: 394px;
  width: 263px;
  background-color: #f3f3f5;
  border-radius: 8px;
  @media ${device.tablet} {
    height: 239px;
    width: 170px;
    padding: 18px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    height: 239px;
    width: 170px;
    padding: 18px;
    font-size: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-around'};
`;
