import styled from 'styled-components';
import { device } from '../../../common/deviceSizes';

export const Button = styled.button`
  background-color: #ff6c00;
  border-radius: 8px;
  border: 0;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;
  transition: all 0.2s linear;
  :hover {
    background-color: #7c9af2;
  }
`;

export const ExpensesList = styled.ul`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
