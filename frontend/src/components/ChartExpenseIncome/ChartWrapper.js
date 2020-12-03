import React from 'react';
import { MyChart } from './ChartExpenseIncome';
import { ChartTitle, ChartWrapperSC } from './chartStyled';

export default function ChartWrapper() {
  return (
    <ChartWrapperSC>
      <ChartTitle>Динамика расходов и накоплений</ChartTitle>
      <MyChart />
    </ChartWrapperSC>
  );
}
