import styled from 'styled-components';
import { device } from '../../common/deviceSizes';

export const ApartmentWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 166px;
  @media ${device.tablet} {
    width: 240px;
  }
  @media ${device.desktop} {
    width: 269px;
  }
`;

export const Overlay = styled.div`
  background-image: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  background: ${props => {
    return ` linear-gradient(
    to right,
    rgba(124, 154, 242, 0.2) ${props.savingPercentage * 100}%,
    rgba(255, 255, 255, 0) ${props.savingPercentage * 100}%,
    rgba(255, 255, 255, 0) 100%,
    rgb(4, 120, 21) 100%
  )`;
  }};
`;
