import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../common/deviceSizes';
import { colors } from '../../stylesheet/vars';

export const BtnNavLInk = styled(NavLink)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 8px;

  &.active {
    background-color: ${colors.main};
  }

  @media ${device.mobile} {
    margin-bottom: 34px;
  }
  @media ${device.tablet} {
    margin-right: 28px;
  }
  @media ${device.desktop} {
    margin-right: 36px;
  }
`;
