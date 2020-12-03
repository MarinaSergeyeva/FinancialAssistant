import styled from 'styled-components';
import { device } from '../../common/deviceSizes';
import { background, colors } from '../../stylesheet/vars';

export const LogoutWrapper = styled.div`
  padding: 40px 30px 50px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;

  @media ${device.largeDevice} {
    width: 500px;
    height: 250px;
    padding: 70px;
  }

  .modalTitle {
    color: ${background.secondary};
    margin-bottom: 30px;
  }

  .btn {
    padding: 10px 20px;
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

export const ButtonStay = styled.button`
  background: ${background.logout};
  color: rgba(24, 25, 31);
  margin-bottom: 20px;

  @media ${device.largeDevice} {
    margin-right: 14px;
  }
`;
export const ButtonExit = styled.button`
  background: ${colors.main};
  color: rgba(255, 255, 255);
`;
