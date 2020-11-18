import styled from 'styled-components';
import device from '../common/deviceSizes';

//!Auth//
export const AuthFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 455px;
  border-radius: 8px;
  background: #fff;
  margin: 5px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    box-shadow: none;
    margin: 70px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 276px;
  }
`;

export const AuthForm = styled.div`
  justify-content: center;
`;

export const AuthTxt = styled.p`
  font-family: 'Gilroy';
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const AuthInputForm = styled.label`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  position: relative;
  padding-top: 7px;
`;

export const AuthInput = styled.input`
  width: 316px;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.36);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 30px;
  padding-left: 18px;
  color: rgba(24, 25, 31, 0.54);

  &::placeholder {
    padding-left: 18px;
  }

  &:active,
  &:focus {
    border: 1px solid #2196f3;
  }

  @media ${device.mobile} {
    width: 279px;
    height: 56px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const AuthInputTxt = styled.p`
  position: absolute;
  top: 0px;
  font-family: 'Roboto';
  text-align: center;
  line-height: 14.06px;
  color: rgba(24, 25, 31, 0.54);
  margin-left: 13px;
  font-size: 12px;
  font-weight: 400;
  padding: 0px 5px;
  border-radius: 10%;
  background: #fff;
  z-index: 100;

  &:active,
  &:focus,
  &:hover {
    color: #2196f3;
  }
`;

export const AuthButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;

  & button {
    width: 170px;
    height: 40px;
    background: #ff6c00;
    text-align: center;
    border-radius: 8px;
    border: none;
    color: #fff;
  }
`;

//!
