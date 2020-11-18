import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const PrognosisBuyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .wrapper {
    width: 280px;
    height: 322px;
    background: rgb(55, 59, 83);
    border-radius: 8px;
    padding: 34px 12px;
  }

  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin-bottom: 23px;
  }
  label {
    position: relative;
  }
  span {
    position: absolute;
    left: 13px;
    bottom: 24px;
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.54);
    background: rgb(55, 59, 83);
    padding: 0px 4px;
  }
  input {
    width: 200px;
    height: 56px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.03);
    padding: 12px 18px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.54);
    }
    &:first-of-type {
      margin-bottom: 23px;
    }
  }
  button {
    width: 200px;
    height: 56px;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    background: rgb(255, 108, 0);
    cursor: pointer;
  }
  img {
    width: 130px;
    height: 99px;
  }

  @media (max-width: ${size.beforeTablet}) {
    .wrapper {
      margin-bottom: 34px;
    }
  }
  @media (min-width: ${size.tablet}) {
    text-align: left;
    .wrapper {
      width: 690px;
      height: 151px;
      padding: 24px 25px;
    }
    label {
      margin-right: 20px;
    }
    input {
      &:first-of-type {
        margin-bottom: 0px;
      }
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
