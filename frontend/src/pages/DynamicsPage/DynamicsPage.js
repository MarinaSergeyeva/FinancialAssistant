import React, { useState } from "react";
import { MyChart } from "../ChartExpenseIncome/ChartExpenseIncome.js";
import styles from "../ChartExpenseIncome/ChartExpenseIncome.module.css";
import { MonthlyExecutionPlan } from "../MonthlyExecutionPlan/MonthlyExecutionPlan.js";
const DynamicsPage = () => {
  return (
    <>
      <p>'DynamicsPage'</p>
      <div className={styles.Chart_wrapper}>
        <div>
          <p className={styles.ChartTitle}>Динамика расходов и накоплений</p>
        </div>
        <MyChart />
      </div>
      <MonthlyExecutionPlan />
    </>
  );
};

export default DynamicsPage;
