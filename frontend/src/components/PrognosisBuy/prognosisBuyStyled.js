import styled from 'styled-components';
import device from '../../common/deviceSizes';

export const PrognosisBuyStyled = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* padding: 0px 34px; */
  /* text-align: center; */
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin-bottom: 23px;
  }
  .wrapper {
    width: 280px;
    height: 322px;
    background: rgb(55, 59, 83);
    border-radius: 8px;
    padding: 34px 12px;
  }
  label {
    position: relative;
  }
  span {
    position: absolute;
    left: 13px;
    bottom: 30px;
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
    /* border: solid 1px rgba(0, 0, 0, 0); */
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
  }
`;
