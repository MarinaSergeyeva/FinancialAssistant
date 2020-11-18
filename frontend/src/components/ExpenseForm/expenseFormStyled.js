import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { colors, background, textColor } from '../../stylesheet/vars';

export const ExpenseFormStyled = styled.div`
  form,
  label {
    display: flex;
    flex-direction: column;
  }

  label {
    position: relative;
    color: ${textColor.secondary};
  }

  label:not(:last-child) {
    margin-bottom: 35px;

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
    margin-bottom: 35px;

    @media ${device.largeDevice} {
      width: 330px;
      margin-bottom: 0px;
    }

    @media ${device.largeDesktop} {
      width: 370px;
    }
  }

  .smallFormContainer_last {
    margin-bottom: 0px;
  }

  .calc-input {
    position: relative;
  }

  .calc-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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
