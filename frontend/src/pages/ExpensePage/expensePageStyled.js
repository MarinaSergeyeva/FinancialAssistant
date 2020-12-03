import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const ExpensePageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 40px;
  width: 280px;
  @media ${device.tablet} {
    max-height: calc(100vh - 87px);
    padding-top: 74px;
    padding-bottom: 510px;
    width: 690px;
  }
  @media ${device.desktop} {
    max-height: 100vh;
    padding-top: 64px;
    width: 770px;
  }
`;

export const ExpenseFormWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 52px;
`;

export const ForecastExpenseWrapper = styled.div`
  margin-bottom: 34px;
  @media ${device.tablet} {
    margin-bottom: 160px;
  }
`;

export const ExpensePageImg = styled.img`
  margin-left: -20px;

  @media ${device.tablet} {
    margin-left: -40px;
    max-height: 320px;
    left: -40px;
  }

  @media ${device.largeDesktop} {
    margin-left: -200px;
  }
`;

export const ExpenseListContainer = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 280px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    padding-top: 74px;
    width: 690px;
  }
  @media ${device.desktop} {
    padding-top: 64px;
    width: 770px;
  }
`;

export const ExpenseListImg = styled.img`
  margin-left: auto;
  max-width: 55%;

  @media ${device.largeDesktop} {
    max-width: 315px;
  }
`;

export const ExpenseListWrap = styled.div`
  min-height: 355px;
  margin-bottom: 55px;
`;
