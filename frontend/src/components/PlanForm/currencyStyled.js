import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const CurrencyStyled = styled.div`
  .currencyWrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55px;
    height: 14px;
    top: 48px;
    right: 18px;
  }
  .iconCurrency {
    height: 12px;
    width: 100%;
    fill: rgba(53, 54, 59, 0.4);
  }
  .selectedIconCurrency {
    fill: rgb(53, 54, 59);
  }
  .iconCurrency:hover,
  .iconCurrency:focus {
    fill: rgb(53, 54, 59);
  }

  .iconDollar {
    height: 14px;
  }

  .iconArrow {
    transform: rotate(180deg);
  }
  .iconArrowRotate {
    transform: rotate(0deg);
  }
  .iconArrow,
  .iconArrowRotate {
    width: 10px;
    height: 5px;
    fill: rgba(24, 25, 31, 0, 87);
  }
  .iconArrow:hover,
  .iconArrow:focus,
  .iconArrowRotate:hover,
  .iconArrowRotate:focus {
    fill: rgb(33, 150, 243);
  }

  .currencyOption {
    position: absolute;
    top: 76px;
    right: 0px;
    width: 102px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19),
      0px 6px 6px rgba(0, 0, 0, 0.26);
    z-index: 2;
  }
  .currencyOptionWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .currencyOption,
  .currencyOptionWrapper {
    height: 118px;
  }

  @media (min-width: ${size.tablet}) {
    .currencyWrapper {
      top: 35px;
      right: 18px;
    }
    .currencyOption {
      top: 62px;
      right: 0px;
      width: 120px;
      height: 70px;
    }
    .currencyOptionWrapper {
      width: 35px;
      height: 70px;
    }
  }
`;
