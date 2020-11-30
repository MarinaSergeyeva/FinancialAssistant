import styled from 'styled-components';
import device from '../../common/deviceSizes';
import {
  colors,
  background,
  textColor,
  boxShadow,
} from '../../stylesheet/vars';
import arrow from '../../assets/images/ExpensePage/select-arrow.png';

export const CalcIconStyled = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 18px;
  right: 12px;
  fill: #35363b;
  cursor: pointer;

  &:hover .icon_hover {
    fill: ${colors.formTextHover};
  }
`;

export const CalcWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: ${boxShadow.main};
`;

export const ExpenseFormStyled = styled.div`
  form,
  label {
    display: flex;
    flex-direction: column;

    @media ${device.largeDevice} {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  form {
    position:relative;
  }

  label {
    position: relative;
    color: ${textColor.secondary};

    @media ${device.largeDevice} {
      &:nth-of-type(2) {
        order: 3;
      }
      &:nth-of-type(3) {
        order: 2;
      }
      &:nth-of-type(4) {
        order: 4;
      }
    }
    }

    label:not(:last-of-type) {
      @media ${device.mobile} {
      margin-bottom: 35px;
      }
    }

    label:nth-of-type(odd){
      @media ${device.largeDevice} {
      margin-bottom: 50px;
      }
    }

    .formContainer {
      @media ${device.mobile} {
        width: 280px;
      }

      @media ${device.largeDevice} {
        display: flex;
        justify-content: space-between;
      }
    }

    .smallFormContainer {
      @media ${device.largeDevice} {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .calc-input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  }

  span {
    position: absolute;
    top: 10px;
    left: 14px;
    font-size: 12px;
    line-height: 14px;
  }
  p {
    position: absolute;
    bottom: -16px;
    left: 14px;
    font-size: 12px;
    line-height: 14px;
  }

  input,
  select {
    background: ${background.main};
    padding: 24px 10px 12px;
    color: rgba(24, 25, 31, 0.87);
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-bottom: 1px solid rgba(24, 25, 31, 0.36);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    /* pointer-events: none; */
    -webkit-appearance: none;
    -moz-appearance: none;
-ms-appearance: none; // reset default input, select css

    @media ${device.tablet} {
      width: 330px;
    }

    @media ${device.largeDesktop} {
      width: 370px;
    }
  }

  label:hover,
  label:focus {
    color: ${colors.formTextHover};
        border: none;

  }

  input:hover,
  input:focus,
  select:hover,
  select:focus {
    border-bottom: 1px solid ${colors.formTextHover};
  }

  .select-arrow{
position:relative;
  }

  .select-arrow::after{
    /* content:'';
    display: block;
    background-color: red; */
    /* background: url(${arrow}) no-repeat right center; */
    content: "▼";
    padding: 0 8px;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 50%;
  transform:translateY(-50%)
  z-index: 1;
  text-align: center;
  width: 10%;
  height: 100%;
  pointer-events: none;
  box-sizing: border-box;
  }
  
`;
