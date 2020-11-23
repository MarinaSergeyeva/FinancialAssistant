import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MonthlyExecutionPlan.module.css";
import ru from "date-fns/locale/ru";
import styled from "styled-components";
import device, { Mobile, Tablet, Desktop } from "../../common/deviceSizes";
registerLocale("ru", ru);
export const MonthlyExecutionPlan = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <MonthlyMainWrapper>
        {/* <input type="text" id="datepicker"></input> */}
        <MonthlyLabel>Месяц </MonthlyLabel>

        <DatePicker
          //locale="ru"
          placeholderText="Укажите месяц ..."
          className={styles.Month_input}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM YYY"
          showMonthYearPicker
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
          isClearable
        />

        <MonthlyCardsWrapper>
          <MonthlyCards>
            <MonthlyLabel>Доходы,</MonthlyLabel>
            <MonthlyValue>00 000</MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>Расходы</MonthlyLabel>
            <MonthlyValue>00 000</MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>Накоплено</MonthlyLabel>
            <MonthlyValue>00 000</MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>План, </MonthlyLabel>
            <MonthlyValue>00 000</MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>План, %</MonthlyLabel>
            <MonthlyValue>00 000</MonthlyValue>
          </MonthlyCards>
        </MonthlyCardsWrapper>
      </MonthlyMainWrapper>
    </>
  );
};
const MonthlyMainWrapper = styled.div`
  /* border: 1px solid black; */
  width: 280px;
  @media ${device.tablet} {
    width: 510px;
  }
  @media ${device.desktop} {
    width: 468px;
  }
`;
const MonthlyCardsWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 510px;
  }
  @media ${device.desktop} {
    width: 465px;
  }
`;
const MonthlyCards = styled.li`
  font-size: 14px;
  line-height: 18px;
  width: 130px;
  height: 48px;
  background-color: #f3f3f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b6c4d4;
  border-radius: 4px;
  margin-bottom: 24px;
  @media ${device.tablet} {
    width: 94px;
    height: 48px;
  }
  @media ${device.desktop} {
    line-height: 18px;
    width: 80px;
    height: 48px;
  }
`;
const MonthlyLabel = styled.p`
  font-size: 12px;
  color: rgba(24, 25, 31, 0.54);
`;
const MonthlyValue = styled.p`
  font-size: 14px;
  color: #18191f;
`;
