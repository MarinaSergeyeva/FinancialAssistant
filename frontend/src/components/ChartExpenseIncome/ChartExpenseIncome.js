import React from 'react';
import useDeviceSizes from '../../hooks/useDeviceSizes.js';
import useChartExpenseIncomeLogic from './hooks/useChartExpenseIncomeLogic.js';

export const MyChart = () => {
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();
  useChartExpenseIncomeLogic();
  return (
    <>
      <div className="chartjs-wrapper">
        <canvas
          id="myChart"
          height={isTabletDevice ? '200' : isMobileDevice ? '480' : '200'}
          className="chartjs"
        ></canvas>
      </div>
    </>
  );
};
