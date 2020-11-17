import React, { Component, useEffect } from "react";

import moment from "moment";
import Chart from "chart.js";
import device from "../../common/deviceSizes.js";
import { useMediaQuery } from "react-responsive";

export const MyChart = () => {
  //let sData = {};
  let sData = {
    months: [],
    totalSavings: [30, 45, 300, 59, 267, 254, 346, 346, 134, 188, 12, 124],
    totalExpenses: [202, 415, 30, 79, 217, 24, 36, 36, 14, 18, 122, 14],
    expectedSavings: [
      450,
      420,
      380,
      320,
      217,
      245,
      318,
      300,
      200,
      180,
      122,
      50,
    ],
  };
  sData.label = [];
  //sData.time = [];
  const count = 12;
  for (let i = 0; i < count; i++) {
    sData.label.push(moment().month(i - 1));
  }

  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    ctx.lineCap = "round";
    const yAxesConfig = {
      gridLines: {
        display: true,
        borderDash: [10, 10],
      },

      ticks: {
        //beginAtZero: true,
        stepSize: 100,
        // max: 500,
        //   min: 0,
        suggestedMin: 50,
        suggestedMax: 500,
      },
    };
    const xAxesConfig = {
      gridLines: {
        display: false,
        offset: true,
      },
      type: "time",
      time: {
        unit: "month",
        displayFormats: {
          month: "MMM",
        },
      },
    };
    var chart = new Chart(ctx, {
      type: isOnMobile ? "horizontalBar" : "bar",
      // type: "bar",
      data: {
        labels: sData.label,

        datasets: [
          {
            barPercentage: 0.8,
            categoryPercentage: 0.6,
            label: "Доходы",
            backgroundColor: "#7C9AF2",
            data: sData.totalSavings,
          },
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
            label: "Расходы",
            backgroundColor: "#FF6C00",
            data: sData.totalExpenses,
          },
          {
            categoryPercentage: 0.6,
            barPercentage: 0.8,
            label: "План",
            // lineHeight: 1.2,
            // fontColor: "pink",
            // padding: 50,
            backgroundColor: "#D7D8DD",
            data: sData.expectedSavings,
          },
        ],
      },

      options: {
        legend: {
          display: true,
          align: "start",

          labels: {
            fontColor: "rgba(24, 25, 31, 0.54)",
            boxWidth: 20,
            boxHeight: 20,
            padding: isOnMobile ? 30 : 30,
          },
        },
        layout: {
          padding: {
            left: isOnMobile ? 10 : 40,
            right: 10,
            top: 0,
            bottom: 0,
          },
        },
        responsive: true,
        scales: {
          xAxes: [isOnMobile ? yAxesConfig : xAxesConfig],
          yAxes: [isOnMobile ? xAxesConfig : yAxesConfig],
        },
      },
    });

    return () => chart.destroy();
  });
  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });
  const isOnTablet = useMediaQuery({
    query: device.tablet,
  });
  return (
    <div className="chartjs-wrapper">
      <canvas
        id="myChart"
        //width={isOnMobile ? "180" : "50"}
        height={isOnTablet ? "300" : isOnMobile ? "500" : "200"}
        className="chartjs"
      ></canvas>
    </div>
  );
};

//===============New++++++==================

// export class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.chartReference = React.createRef();
//     //======
//     let sData = {};
//     sData.label = [];
//     sData.time = [];

//     const count = 12;
//     for (let i = 0; i < count; i++) {
//       sData.label.push(
//         moment()
//           //   .year(2020)
//           .month(i - 1)
//         //   .date(i * 1)
//         //   .startOf("day")
//       );
//       //   sData.time.push(Math.round(Math.random() * 100));
//     }
//     console.log("sData.label", sData.label);
//     console.log("Chart.defaults", Chart.defaults);
//     //======
//     this.state = {
//       data: {
//         labels: sData.label,
//         datasets: [
//           {
//             data: [20, 50, 150, 75, 400, 50],
//             label: "income",
//             yAxisID: "first-y-axis",
//             // barThickness: 10,
//             borderColor: "black",
//             borderWidth: 2,
//             borderRadius: 5,
//             borderSkipped: false,
//             backgroundColor: "#7C9AF2",
//             // borderWidth: 2,
//             // borderColor: "black",
//             // borderSkipped: "bottom",
//             // borderRadius: 2,
//             // hitRadius: 4,
//           },

//           {
//             data: [1, 5, 1, 2, 1, 0],
//             label: "expenditure",
//             yAxisID: "second-y-axis",
//             backgroundColor: "#FF6C00",
//             // barThickness: 10,
//             hitRadius: 4,
//             //borderRadius: 2,
//           },
//           {
//             data: [10, 50, 10, 20, 10, 300],
//             label: "target amount need to save",
//             yAxisID: "third-y-axis",
//             backgroundColor: "#D7D8DD",
//             // barThickness: 10,
//             //hitRadius: 2,
//             barRoundness: 5,
//           },
//         ],
//       },
//       options: {
//         layout: {
//           padding: {
//             left: 50,
//             right: 50,
//             top: 100,
//             bottom: 0,
//           },
//         },
//         scales: {
//           //   xAxes: [
//           // {
//           //   ticks: {
//           //     max: 900,
//           //     min: 0,
//           //     stepSize: 100,
//           //   },
//           // },
//           //],
//           xAxes: [
//             {
//               type: "time",
//               time: {
//                 unit: "month",
//               },
//               //   ticks: {
//               //     min: "Feb", //!!!!   start to show chart from this month!
//               //   },
//             },
//             // {
//             //   type: "time",
//             //   position: "bottom",
//             //   time: {
//             //     unit: "month",
//             //   },
//             // },
//           ],

//           yAxes: [
//             {
//               id: "first-y-axis",
//               type: "linear",
//               position: "top",
//             },
//             {
//               id: "second-y-axis",
//               type: "linear",
//               position: "left",
//             },
//             {
//               id: "third-y-axis",
//               type: "linear",
//               position: "right",
//             },
//           ],
//         },
//       },
//     };
//   }

//   componentDidMount() {
//     console.log(this.chartReference); // returns a Chart.js instance reference
//   }

//   render() {
//     return (
//       <Bar
//         // type="horizontalBar"
//         // width={500}
//         // heigth={300}
//         ref={this.chartReference}
//         data={this.state.data}
//         options={this.state.options}
//       />
//     );
//   }
// }
//==================NEW++++++++=+=============
// let myChart = document.getElementById("myChart").getContext("2d");
// let Chart = new Chart(myChart, {
//   type: "bar",
//   data: {
//     labels: ["qwr", "qwrq", "qwrqw"],
//     datasets: [
//       {
//         data: [20, 50, 100, 75, 25, 0],
//         label: "Left dataset",
//         yAxisID: "first-y-axis",
//       },
//       {
//         data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
//         label: "Right dataset",
//         yAxisID: "second-y-axis",
//       },
//     ],
//   },
//   options: {
//     scales: {
//       xAxes: [
//         {
//           categoryPercentage: 0.4,
//           gridLines: { display: false },
//           scaleLabel: {
//             display: true,
//             labelString: "Amount",
//             fontFamily: "Rubik, sans-serif",
//           },
//           ticks: {
//             beginAtZero: true,
//             stepSize: 10000,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           categoryPercentage: 0.4,
//           scaleLabel: {
//             display: true,
//             labelString: "List of Countries",
//             fontFamily: "Rubik, sans-serif",
//           },
//           ticks: {
//             beginAtZero: true,
//             stepSize: 10000,
//           },
//         },
//       ],
//     },
//   },
// });

//import { Bar } from "react-chartjs-2";
//import Chart from "chart.js";
// export class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         datasets: [
//           {
//             data: [20, 50, 100, 75, 25, 0],
//             label: "Left dataset",
//             yAxisID: "first-y-axis",
//           },
//           {
//             data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
//             label: "Right dataset",
//             yAxisID: "second-y-axis",
//           },
//         ],
//       },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           id: "first-y-axis",
//           type: "linear",
//         },
//         {
//           id: "second-y-axis",
//           type: "linear",
//         },
//       ],
//     },
//   }, //         // {
//         //   id: "3-y-axis",
//         //   type: "linear",
//         // },
//         // {
//         //   id: "4-y-axis",
//         //   type: "linear",
//         // },
//         // {
//         //   id: "5-y-axis",
//         //   type: "linear",
//         // },
//         // {
//         //   id: "6-y-axis",
//         //   type: "linear",
//         // },
//         // {
//         //   id: "7-y-axis",
//         //   type: "linear",
//         // },
//       ],
//     },
//},
//   chartData: {
//     labels: ["Boston", "wq", "seg", "zd", "xddgs", "xfg"],
//     datasets: [
//       {
//         label: "Population",
//         // data: [
//         //   {
//         //     x: new Date(),
//         //     y: 1,
//         //   },
//         //   {
//         //     t: new Date(),
//         //     y: 10,
//         //   },
//         // ],
//         barThickness: 6,
//         maxBarThickness: 8,
//         // backgroundColor: [
//         //   " rgb(40, 131, 161)",
//         //   "rgb(93, 119, 64)",
//         //   " rgb(65, 64, 119)",
//         //   " rgb(119, 64, 119)",
//         //   " rgb(119, 64, 85)",
//         // ],
//       },
//     ],
//   },
//      props.chartData,
//     };
//   }
//   static defaultProps = {
//     displayTitle: true,
//     displayLegend: true,
//     legendPosition: "right",
//     location: "City",
//   };
//   render() {
//     return (
//       <div className="chart">
//         <Bar
//           width={500}
//           heigth={10}
//           //   type="line"
//           //   type="horizontal"
//           data={this.state.data}
//           options={{
//             scales: {
//               yAxes: [
//                 {
//                   id: "left-y-axis",
//                   type: "bar",
//                   position: "left",
//                 },
//                 {
//                   id: "right-y-axis",
//                   type: "bar",
//                   position: "right",
//                 },
//               ],
//             },

// {
// scales: {
//   xAxes: [
//     {
//       type: "time",
//       time: {
//         unit: "month",
//       },
//     },
//   ],
// },
//             layout: {
//               padding: {
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 0,
//               },
//             },
//             tooltips: {
//               mode: "point",
//             },
//             title: {
//               display: this.props.displayTitle,
//               text: "Largest Cities In " + this.props.location,
//               fontSize: 25,
//             },
//             legend: {
//               display: this.props.displayLegend,
//               position: this.props.legendPosition,
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
//=============================
// export Chart;

// export class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         chartData:
//       //      props.chartData,
//     };
//   }
//   static defaultProps = {
//     displayTitle: true,
//     displayLegend: true,
//     legendPosition: "right",
//     location: "City",
//   };
//   render() {
//     return (
//       <div className="chart">
//         <Bar
//           data={this.state.chartData}
//           options={{
//             title: {
//               display: this.props.displayTitle,
//               text: "Largest Cities In " + this.props.location,
//               fontSize: 25,
//             },
//             legend: {
//               display: this.props.displayLegend,
//               position: this.props.legendPosition,
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
