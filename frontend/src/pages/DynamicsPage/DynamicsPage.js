import React, { useState } from "react";
//import { MyChart } from "../ChartExpenseIncome/ChartExpenseIncome.js";
//import styles from "../ChartExpenseIncome/ChartExpenseIncome.module.css";
import { MonthlyExecutionPlan } from "../MonthlyExecutionPlan/MonthlyExecutionPlan.js";
import device, { Mobile, Tablet, Desktop } from "../../common/deviceSizes";
import styled from "styled-components";
import ChartWrapper from "../ChartExpenseIncome/ChartWrapper.js";

const DynamicsPage = () => {
  return (
    <>
      <p>'DynamicsPage'</p>
      <ChartWrapper />
      <MonthlyExecutionPlan />
    </>
  );
};

export default DynamicsPage;

// export default function ChartWrapper() {
//   return (
//     <ChartWrapperSC>
//       <ChartTitle />
//       <MyChart />
//     </ChartWrapperSC>
//   );
// }
// const ChartWrapperSC = styled.div`
//   width: 468px;
//   height: 390px;
//   border: 1px solid black;
//   margin-bottom: 20px;
// `;
// export default function ChartTitle() {
//   return (
//     <div>
//       <ChartTitlteSC />
//     </div>
//   );
// }
// const ChartTitlteSC = styled.p`
//   width: 468px;
//   height: 70px;
//   background-color: #f3f3f5;
//   font-weight: 800;
//   font-size: 20px;
//   line-height: 70px;
//   text-align: center;
// `;
