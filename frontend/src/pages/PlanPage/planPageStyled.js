import styled from 'styled-components';
import device from '../../common/deviceSizes';

export const PlanPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 20px 42px;
  font-size: 0px;

  @media ${device.tablet} {
    padding: 74px 39px;
  }
  @media ${device.desktop} {
    padding: 64px 0px 74px;
  }
`;

export const PlanFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: green;
  font-size: 12px;
  margin-bottom: 48px;
`;
export const PrognosisBuyWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: green;
  font-size: 12px;
  margin-bottom: 48px;
`;
