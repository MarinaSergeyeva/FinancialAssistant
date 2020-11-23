import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const PrognosisBuyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 280px;
    height: 322px;
    padding: 34px 12px;
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 23px;
  }
  label {
    position: relative;
  }
  span {
    position: absolute;
    left: 13px;
    bottom: 26px;
    font-size: 12px;
    line-height: 14px;
    padding: 0px 4px;
  }
  .wrapper,
  span {
    background: rgb(55, 59, 83);
  }
  input {
    width: 200px;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    background: rgba(0, 0, 0, 0.03);
    padding: 12px 18px;
  }
  span,
  input {
    font-weight: 400;
  }
  span,
  input::placeholder {
    color: rgba(255, 255, 255, 0.54);
  }
  button {
    width: 200px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    border: none;
    background: rgb(255, 108, 0);
    cursor: pointer;
  }
  input,
  button {
    height: 56px;
  }
  .wrapper,
  input,
  button {
    border-radius: 8px;
  }
  h2,
  input,
  button {
    color: rgb(255, 255, 255);
  }
  img {
    width: 130px;
    height: 99px;
  }

  @media (max-width: ${size.beforeTablet}) {
    text-align: center;
    .wrapper {
      margin-bottom: 34px;
    }
    input {
      margin-bottom: 23px;
    }
  }

  @media (min-width: ${size.tablet}) {
    .wrapper {
      width: 690px;
      height: 151px;
      padding: 24px 25px;
    }
    label {
      margin-right: 20px;
    }
  }

  @media (max-width: ${size.beforeDesktop}) {
    .wrapper {
      margin-bottom: 74px;
    }
    img {
      width: 238px;
      height: 182px;
    }
  }

  @media (min-width: ${size.desktop}) {
    flex-direction: row;
    .wrapper {
      width: 770px;
      padding-right: 65px;
      padding-left: 65px;
      margin-left: 127px;
    }
  }
`;
