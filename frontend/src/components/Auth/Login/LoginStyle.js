import styled from 'styled-components';
import { device } from '../../../common/deviceSizes';

export const AuthFormWrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 354px;
  border-radius: 8px;
  background: #fff;
  margin: 5px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    box-shadow: none;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 276px;
  }
`;