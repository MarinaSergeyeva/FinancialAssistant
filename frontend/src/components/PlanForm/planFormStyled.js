import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const PlanFormStyled = styled.div`
  margin-bottom: 14px;
  form,
  label {
    display: flex;
    flex-direction: column;
  }
  label {
    position: relative;
    width: 280px;
    color: rgb(24, 25, 31, 0.54);
    margin-bottom: 35px;
  }
  span {
    position: absolute;
    top: 10px;
    left: 12px;
  }
  span,
  p {
    font-size: 12px;
    line-height: 14px;
  }
  span,
  p,
  input {
    font-weight: 400;
  }
  label:hover,
  label:focus {
    color: rgb(33, 150, 243);
  }
  input {
    background: rgba(0, 0, 0, 0.03);
    padding: 30px 12px 12px;
    color: rgba(24, 25, 31, 0.87);
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-bottom: 1px solid rgba(24, 25, 31, 0.36);
    border-radius: 8px 8px 0px 0px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .secondColumn label:nth-of-type(1) input,
  .secondColumn label:nth-of-type(2) input {
    padding-top: 44px;
  }
  p {
    height: 30px;
    color: rgba(24, 25, 31, 0.54);
    padding-top: 4px;
  }
  input:hover,
  input:focus {
    border-bottom: 1px solid rgb(33, 150, 243);
  }

  /* .selectWrapper {
    position: absolute;
    top: 34px;
    right: 12px;
  }
  select {
    position: relative;
    width: 102px;
    height: 20px;
    outline: none;
    background: rgba(0, 0, 0, 0);
    background-image: url('.././../assets/icons/PlanForm/Shape.png');
    background-position: right center;
    background-repeat: no-repeat;
    padding: 30px 12px 12px;
    color: rgba(24, 25, 31, 0.87);
    font-size: 16px;
    line-height: 19px;
    border: none;
  } */
  /* option {
    position: absolute;
    top: 100px;
    background: red;
    border: none;
  } */
  ///------- currency ---------
  /////height

  @media (min-width: ${size.tablet}) {
    form {
      flex-direction: row;
    }
    .firstColumn {
      margin-right: 30px;
    }
    label {
      width: 330px;
    }
    label:not(:last-of-type) {
      margin-bottom: 52px;
    }
    .secondColumn label:nth-of-type(1) input,
    .secondColumn label:nth-of-type(2) input {
      padding-top: 30px;
    }
  }

  @media (min-width: ${size.desktop}) {
    label {
      width: 370px;
    }
  }
`;
