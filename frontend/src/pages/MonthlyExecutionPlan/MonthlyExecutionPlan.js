import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MonthlyExecutionPlan.module.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
export const MonthlyExecutionPlan = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className={styles.Monthly_main_wrapper}>
        {/* <input type="text" id="datepicker"></input> */}
        <p className={styles.label}>Месяц </p>

        <DatePicker
          locale="ru"
          placeholderText="Укажите месяц ..."
          className={styles.Month_input}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat=" MMMM YYY"
          showMonthYearPicker
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
          isClearable
        />

        <div className={styles.Monthly_cards_wrapper}>
          <div className={styles.Monthly_cards}>
            <p className={styles.label}>Доходы, </p>
            <p className={styles.value}>00 000</p>
          </div>
          <div className={styles.Monthly_cards}>
            <p className={styles.label}>Расходы</p>
            <p className={styles.value}>00 000</p>
          </div>
          <div className={styles.Monthly_cards}>
            <p className={styles.label}>Накоплено</p>
            <p className={styles.value}>00 000</p>
          </div>
          <div className={styles.Monthly_cards}>
            <p className={styles.label}>План, </p>
            <p className={styles.value}>00 000</p>
          </div>
          <div className={styles.Monthly_cards}>
            <p className={styles.label}>План, %</p>
            <p className={styles.value}>00 000</p>
          </div>
        </div>
      </div>
    </>
  );
};
