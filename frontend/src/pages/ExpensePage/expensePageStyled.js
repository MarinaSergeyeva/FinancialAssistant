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

export const ExpenseListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExpenseListWrap = styled.div`
  min-height: 355px;
  margin-bottom: 55px;
`;

export const TabsModeView = styled.ul`
  margin-right: 50px;
  display: flex;
`;

export const TabMode = styled.li`
  display: flex;
  border: 1px solid rgba(24, 25, 31, 0.03);
  border-radius: 8px 8px 0px 0px;

  .tab-link {
    padding: 18px 12px;
    flex-grow: 1;
    color: rgb(16.5%, 21.2%, 23.1%);
  }
  .active-tab {
    background: rgba(24, 25, 31, 0.03);
  }
`;

export const BtnCalendar = styled.button`
  margin-bottom: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e3eaff;
  border-width: 0;
  border-radius: 8px;
`;

export const SvgIcon = styled.svg`
  width: 14px;
  height: 16px;
  fill: #18191f;
  fill-opacity: 0.54;
`;
