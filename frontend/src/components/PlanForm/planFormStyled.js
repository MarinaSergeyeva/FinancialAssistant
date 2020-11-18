import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const PlanFormStyled = styled.div`
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

  label:not(:last-of-type) {
    margin-bottom: 35px;
  }

  span {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
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
    font-weight: 400;
    line-height: 19px;
    border: none;
    border-bottom: 1px solid rgba(24, 25, 31, 0.36);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .secondColumn label:nth-of-type(1) input,
  .secondColumn label:nth-of-type(2) input {
    padding-top: 44px;
  }
  .accumulation {
    top: 60px;
    color: rgba(24, 25, 31, 0.54);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    padding-top: 4px;
  }

  input:hover,
  input:focus {
    border-bottom: 1px solid rgb(33, 150, 243);
  }

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
