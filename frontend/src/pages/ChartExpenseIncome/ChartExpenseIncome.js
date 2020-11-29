import React, { useEffect } from 'react';
import Chart from 'chart.js';
import device from '../../common/deviceSizes.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import chartSelector from '../../redux/selectors/chartSelector';

export const MyChart = () => {
  const allReports = useSelector(state => {
    return chartSelector.getMonthlyReport(state);
  });

  const reportsNewR = Object.values(allReports);
  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });
  const isOnTablet = useMediaQuery({
    query: device.tablet,
  });

  const reportsNew = isOnMobile ? reportsNewR : reportsNewR.reverse();

  let arrayOfTotalSavings = [];
  let arrayOfTotalExpenses = [];
  let arrayOfExpectedSavings = [];
  let arrayOfReportDate = [];
  if (reportsNew.length > 0) {
    arrayOfTotalSavings = reportsNew.map(item => item.totalIncome);
    arrayOfTotalExpenses = reportsNew.map(item => item.totalExpenses);
    arrayOfExpectedSavings = reportsNew.map(item => item.totalSavings);
    arrayOfReportDate = reportsNew.map(item => {
      const data = new Date(item.reportDate);

      return data.toLocaleString('default', {
        month: 'short',
        year: '2-digit',
      });
    });
  } else {
    arrayOfTotalSavings = [];
    arrayOfTotalExpenses = [];
    arrayOfExpectedSavings = [];
    arrayOfReportDate = [];
  }

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.lineCap = 'round';
    const yAxesConfig = {
      gridLines: {
        display: true,
        borderDash: [10, 10],
      },

      ticks: {
        beginAtZero: true,
      },
    };
    const xAxesConfig = {
      gridLines: {
        display: false,
        offset: true,
      },
    };
    var chart = new Chart(ctx, {
      type: isOnMobile ? 'horizontalBar' : 'bar',

      data: {
        display: true,
        labels: arrayOfReportDate,

        datasets: [
          {
            barPercentage: 0.8,
            categoryPercentage: 0.6,
            label: 'Доходы',
            backgroundColor: '#7C9AF2',
            data: arrayOfTotalSavings === [] ? 0 : arrayOfTotalSavings,
          },
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
            label: 'Расходы',
            backgroundColor: '#FF6C00',
            data: arrayOfTotalExpenses === [] ? 0 : arrayOfTotalExpenses,
          },
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
            label: 'План',
            backgroundColor: '#D7D8DD',
            data: arrayOfExpectedSavings === [] ? 0 : arrayOfExpectedSavings,
          },
        ],
      },

      options: {
        legend: {
          display: true,
          align: 'center',

          labels: {
            fontColor: 'rgba(24, 25, 31, 0.54)',
            boxWidth: 20,
            boxHeight: 20,
            padding: isOnMobile ? 5 : 30,
          },
        },
        layout: {
          padding: {
            left: isOnMobile ? 0 : 0,
            right: isOnMobile ? 10 : 0,
            top: 10,
            bottom: isOnMobile ? 0 : 10,
          },
        },

        scales: {
          xAxes: [isOnMobile ? yAxesConfig : xAxesConfig],
          yAxes: [isOnMobile ? xAxesConfig : yAxesConfig],
        },
      },
    });

    return () => chart.destroy();
  });

  return (
    <div className="chartjs-wrapper">
      <canvas
        id="myChart"
        height={isOnTablet ? '200' : isOnMobile ? '480' : '200'}
        className="chartjs"
      ></canvas>
    </div>
  );
};
