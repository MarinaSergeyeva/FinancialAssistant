import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const ExpensePageWrap = styled.div`
  position: relative;
  @media ${device.largeTablet} {
    min-height: calc(100vh - 87px);
    padding-bottom: 100px;
  }
  &.main {
    @media ${device.largeTablet} {
      padding-bottom: 350px;
    }
    @media ${device.desktop} {
      padding-bottom: 175px;
    }
  }
`;

export const ExpensePageContainer = styled.div`
  margin: 0 auto 35px;
  padding-top: 40px;
  width: 280px;
  @media ${device.largeTablet} {
    padding-top: 74px;
    width: 690px;
  }
  @media ${device.desktop} {
    padding-top: 64px;
    width: 770px;
  }
`;

export const ExpenseFormWrapper = styled.div`
  margin-bottom: 52px;
`;

export const ExpensePageFooter = styled.div`
  min-height: 163px;
  background-repeat: no-repeat;
  @media ${device.largeTablet} {
    position: absolute;
    bottom: 0;
  }
  &.footer_main {
    background-image: url('/images/ExpensePage/expensePage_bg-mobile.png');
    background-position: left bottom;
    @media ${device.largeTablet} {
      left: 0;
      height: 347px;
      width: 574px;
      background-image: url('/images/ExpensePage/expensePage_bg-tablet.png');
    }
    @media ${device.desktop} {
      height: 265px;
      width: 437px;
      background-image: url('/images/ExpensePage/expensePage_bg-desktop.png');
    }
  }
  &.footer_list {
    background-image: url('/images/ExpensePage/expenseList_bg-mobile.png');
    background-position: right bottom;
    @media ${device.largeTablet} {
      right: 0;
      width: 355px;
      height: 291px;
      background-image: url('/images/ExpensePage/expenseList_bg.png');
    }
  }
`;
