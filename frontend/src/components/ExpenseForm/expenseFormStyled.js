import styled from 'styled-components';
import device from '../../common/deviceSizes';
import {
  colors,
  background,
  textColor,
  boxShadow,
} from '../../stylesheet/vars';

export const CalcIconStyled = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0px;
  fill: #35363b;
  cursor: pointer;

  @media ${device.largeDevice} {
    bottom: 78px;
    right: 5%;
    transform: translateY(50%);
  }

  &:hover .icon_hover {
    fill: ${colors.formTextHover};
  }
`;

export const CalcWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 0px;
  box-shadow: ${boxShadow.main};
`;

export const ExpenseFormStyled = styled.div`
  form,
  label {
    display: flex;
    flex-direction: column;
    /* margin-bottom: 35px; */

    @media ${device.largeDevice} {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  label {
    position: relative;
    color: ${textColor.secondary};

    @media ${device.tablet} {
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
      margin-bottom: 35px;
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
      /* margin-bottom: 35px; */

      @media ${device.tablet} {
        /* width: 330px; */
        margin-bottom: 0px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  /* .smallFormContainer_last {
    position: relative;
    margin-bottom: 0px;
  } */

  .calc-input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  }

  /* .calc-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  } */

  /* .svg:hover {
    color: ${colors.formTextHover};
  } */

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
  }

  input:hover,
  input:focus,
  select:hover,
  select:focus {
    border-bottom: 1px solid ${colors.formTextHover};
  }
`;
