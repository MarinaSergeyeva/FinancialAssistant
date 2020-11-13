import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      data: {
        datasets: [
          {
            data: [20, 50, 150, 75, 400, 0],
            label: "Left dataset",
            yAxisID: "first-y-axis",
          },

          {
            data: [1, 5, 1, 2, 1, 0],
            label: "Right dataset",
            yAxisID: "second-y-axis",
          },
          {
            data: [10, 50, 10, 20, 10, 300],
            label: "Right dataset",
            yAxisID: "third-y-axis",
          },
        ],
        labels: ["January", "February", "March", "April", "May", "June"],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                max: 500,
                min: 0,
                stepSize: 100,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                min: "January", //!!!!   start to show chart from this month!
              },
            },
          ],
          yAxes: [
            {
              id: "first-y-axis",
              type: "linear",
              position: "top",
            },
            {
              id: "second-y-axis",
              type: "linear",
              position: "left",
            },
            {
              id: "third-y-axis",
              type: "linear",
              position: "right",
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    console.log(this.chartReference); // returns a Chart.js instance reference
  }

  render() {
    return (
      <Bar
        ref={this.chartReference}
        data={this.state.data}
        options={this.state.options}
      />
    );
  }
}

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
