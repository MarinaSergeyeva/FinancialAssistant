import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';

export default function ChartTitle() {
  return (
    <div>
      <ChartTitlteSC>Динамика расходов и накоплений</ChartTitlteSC>
    </div>
  );
}
const ChartTitlteSC = styled.p`
  width: 230px;
  /* height: 70px; */
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  @media ${device.mobile} {
    margin: 30px 0;
  }
  @media ${device.tablet} {
    background-color: #f3f3f5;
    width: 510px;
    height: 70px;
    font-size: 20px;
    line-height: 70px;
  }
  @media ${device.desktop} {
    background-color: #f3f3f5;
    width: 468px;
    height: 70px;
    font-size: 20px;
    line-height: 70px;
  }
`;
