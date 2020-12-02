import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const MonthlyMainWrapper = styled.div`
  margin: 0 auto;
  width: 280px;
  @media ${device.tablet} {
    width: 510px;
  }
  @media ${device.desktop} {
    width: 468px;
  }

  .month_input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.36);
    font-size: 14px;
    line-height: 20px;
    color: #18191f;
  }
`;
export const MonthlyCardsWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 510px;
  }
  @media ${device.desktop} {
    width: 465px;
  }
`;
export const MonthlyCards = styled.li`
  font-size: 14px;
  line-height: 18px;
  width: 130px;
  height: 48px;
  background-color: #f3f3f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b6c4d4;
  border-radius: 4px;
  margin-bottom: 24px;
  @media ${device.tablet} {
    width: 94px;
    height: 48px;
  }
  @media ${device.desktop} {
    line-height: 18px;
    width: 80px;
    height: 48px;
    margin-bottom: 0px;
  }
`;
export const MonthlyLabel = styled.p`
  font-size: 12px;
  color: rgba(24, 25, 31, 0.54);
`;
export const MonthlyValue = styled.p`
  font-size: 14px;
  color: #18191f;
`;
