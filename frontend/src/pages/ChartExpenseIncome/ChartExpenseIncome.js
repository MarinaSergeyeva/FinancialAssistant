import React, { Component, useEffect } from 'react';

import Chart from 'chart.js';
import device from '../../common/deviceSizes.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import chartSelector from '../../redux/selectors/chartSelector';

export const MyChart = () => {
  //const [startDate, setStartDate] = useState(new Date());
  const allReports = useSelector(state => {
    console.log('state', state);
    return chartSelector.getMonthlyReport(state);
  });
  console.log('allReports', allReports.length);
  const reportsNewR = Object.values(allReports);
  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });
  const isOnTablet = useMediaQuery({
    query: device.tablet,
  });
  //const reportsNew = reportsNewR.splice(0, 11).reverse();
  const reportsNew = isOnMobile
    ? reportsNewR.splice(0, 12)
    : reportsNewR.splice(0, 12).reverse();
  console.log('reportsNew', reportsNew);

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
      //return data;
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

  //console.log('arrayOfReportDate', arrayOfReportDate);
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    // ctx.lineCap = 'round';
    const yAxesConfig = {
      gridLines: {
        display: true,
        borderDash: [10, 10],
      },

      ticks: {
        beginAtZero: true,
        //stepSize: 10000,
        // max: 500,
        //   min: 0,
        // suggestedMin: 50,
        //suggestedMax: 70000,
      },
    };
    const xAxesConfig = {
      gridLines: {
        display: false,
        offset: true,
      },
      //type: 'time',
      // time: {
      //   //unit: 'month',
      //   displayFormats: {
      //     month: 'MMM',
      //   },
      // },
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
            // lineHeight: 1.2,
            // fontColor: "pink",
            // padding: 50,
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
  // const isOnMobile = useMediaQuery({
  //   query: device.mobile,
  // });
  // const isOnTablet = useMediaQuery({
  //   query: device.tablet,
  // });
  return (
    <div className="chartjs-wrapper">
      <canvas
        id="myChart"
        //width={isOnMobile ? "180" : "50"}
        height={isOnTablet ? '200' : isOnMobile ? '480' : '200'}
        className="chartjs"
      ></canvas>
    </div>
  );
};
