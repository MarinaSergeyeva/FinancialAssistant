import styled from 'styled-components';
import { background } from '../../../stylesheet/vars';

export const ButtonLogout = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 16px;
  background: ${background.logout};
  border: none;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const LogoutImg = styled.span`
  margin-left: 14px;
`;
