import Chart from 'chart.js';
import { useEffect } from 'react';
import useDeviceSizes from '../../../hooks/useDeviceSizes';
import useReduxState from '../../../hooks/useReduxState';

const useChartExpenseIncomeLogic = () => {
  const { monthReports } = useReduxState();
  const reportsNewR = Object.values(monthReports);
  const { isMobileDevice } = useDeviceSizes();

  const reportsNew = isMobileDevice
    ? reportsNewR.splice(0, 12)
    : reportsNewR.splice(0, 12).reverse();
  let arrayOfTotalSavings = [];
  let arrayOfTotalExpenses = [];
  let arrayOfExpectedSavings = [];
  let arrayOfReportDate = [];
  if (reportsNew.length > 0) {
    arrayOfTotalSavings = reportsNew.map(item => item.totalIncome);
    arrayOfTotalExpenses = reportsNew.map(item => item.totalExpenses);
    arrayOfExpectedSavings = reportsNew.map(item => item.totalSavings);
    arrayOfReportDate = reportsNew.map(item => {
      if (!item.reportDate) {
        return '';
      } else {
        const data = new Date(item.reportDate);
        return data.toLocaleString('default', {
          month: 'short',
          year: '2-digit',
        });
      }
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
      type: isMobileDevice ? 'horizontalBar' : 'bar',

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
            padding: isMobileDevice ? 5 : 30,
          },
        },
        layout: {
          padding: {
            left: isMobileDevice ? 0 : 0,
            right: isMobileDevice ? 10 : 0,
            top: 10,
            bottom: isMobileDevice ? 0 : 10,
          },
        },

        scales: {
          xAxes: [isMobileDevice ? yAxesConfig : xAxesConfig],
          yAxes: [isMobileDevice ? xAxesConfig : yAxesConfig],
        },
      },
    });

    return () => chart.destroy();
  });
};

export default useChartExpenseIncomeLogic;
