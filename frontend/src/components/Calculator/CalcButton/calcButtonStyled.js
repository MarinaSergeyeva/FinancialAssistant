import styled from 'styled-components';
import { device } from '../../../common/deviceSizes';
export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  color: #212638;
  flex: 1;
  width: 44px;
  height: 44px;
  border-radius: ${props => (props.radius ? props.radius : '50%')};
  margin-right: 12px;
  :last-child {
    margin-right: 0px;
    background-color: #fe9241;
    color: #ffffff;
  }
  @media ${device.tablet} {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  @media ${device.desktop} {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
`;
