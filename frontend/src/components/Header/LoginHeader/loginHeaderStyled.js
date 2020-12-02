import styled from 'styled-components';
import { background, colors } from '../../../stylesheet/vars';

export const LoginHeaderWrapper = styled.div`
  .btn {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
`;
export const ButtonLogin = styled.button`
  background: ${background.logout};
  color: rgba(24, 25, 31);
  margin-right: 14px;
`;
export const ButtonRegistration = styled.button`
  background: ${colors.main};
  color: rgba(255, 255, 255);
`;
