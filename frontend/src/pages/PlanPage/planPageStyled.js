import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

export const PlanPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 20px 42px;
  font-family: 'Roboto';
  font-size: 0px;

  @media (min-width: ${size.tablet}) {
    padding: 74px 39px;
  }

  @media (min-width: ${size.desktop}) {
    padding: 64px 0px 74px;
  }
`;
