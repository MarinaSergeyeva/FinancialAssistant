import styled from 'styled-components';
import device from '../common/deviceSizes';
import { background, textColor } from '../stylesheet/vars';

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
export const ErrMessage = styled.p`
  color: red;
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
  /* position: absolute;
top: 60%; */
`;
//!

//!MODAL SUCCESS

export const CongratulationWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 280px;
  height: 303px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #7c9af2;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  & p {
    min-width: 120px;
    height: 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #7c9af2;
    padding-top: 40px;
  }

  & span {
    width: 215px;
    height: auto;
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(24, 25, 31, 0.87);
    margin-top: 40px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }

  @media ${device.desktop} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }
`;

export const CongratulationBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
`;

export const CongratulationBackgroundImg = styled.img`
  position: absolute;
  top: 45%;
  left: 53%;
  z-index: 1;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
  }

  @media ${device.desktop} {
    top: 50%;
    left: 50%;
  }
`;
//!MODAL SUCCESS
//!MODAL ERROR
export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  width: 280px;
  height: 303px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #7c9af2;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  & p {
    min-width: 120px;
    height: 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #ff2e00;
    padding-top: 110px;
  }

  & span {
    width: 215px;
    height: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ff2e00;
    margin-top: 40px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
      padding-top: 100px;
    }

    & span {
      width: 310px;
      margin-top: 40px;
    }
  }

  @media ${device.desktop} {
    width: 400px;
    height: 247px;

    & p {
      min-width: 180px;
    }

    & span {
      width: 310px;
    }
  }
`;

export const ErrorBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 303px;
`;

export const ErrorBackgroundImg = styled.img`
  position: absolute;
  top: 35%;
  left: 53%;
  z-index: 1;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    top: 40%;
    left: 50%;
  }

  @media ${device.desktop} {
    top: 40%;
    left: 50%;
  }
`;

//!MODAL ERROR
