import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';
import useMonthlyExecutionPlanLogic from './hooks/useMonthlyExecutionPlanLogic';
import {
  MonthlyCards,
  MonthlyCardsWrapper,
  MonthlyLabel,
  MonthlyMainWrapper,
  MonthlyValue,
} from './monthlyExecutionPlanStyled';

export const MonthlyExecutionPlan = () => {
  const { values, onChange } = useMonthlyExecutionPlanLogic();
  const { startDate, actualReport } = values;

  return (
    <>
      <MonthlyMainWrapper>
        <MonthlyLabel>Месяц </MonthlyLabel>

        <DatePicker
          locale="bg"
          placeholderText="Укажите месяц ..."
          className="month_input"
          selected={startDate}
          onChange={onChange}
          dateFormat="MMMM YYY"
          showMonthYearPicker
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
          maxDate={addMonths(new Date(), 0)}
        />

        <MonthlyCardsWrapper>
          <MonthlyCards>
            <MonthlyLabel>Доходы, &#8372;</MonthlyLabel>
            <MonthlyValue>
              {new Intl.NumberFormat('ua-UA').format(
                actualReport ? actualReport.totalIncome : 0,
              )}
            </MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>Расходы, &#8372;</MonthlyLabel>
            <MonthlyValue>
              {new Intl.NumberFormat('ua-UA').format(
                actualReport ? actualReport.totalExpenses : 0,
              )}
            </MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>Накоплено, &#8372;</MonthlyLabel>
            <MonthlyValue>
              {new Intl.NumberFormat('ua-UA').format(
                actualReport ? actualReport.totalSavings : 0,
              )}
            </MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>План, &#8372; </MonthlyLabel>
            <MonthlyValue>
              {new Intl.NumberFormat('ua-UA').format(
                actualReport ? actualReport.expectedSavings : 0,
              )}
            </MonthlyValue>
          </MonthlyCards>
          <MonthlyCards>
            <MonthlyLabel>План %</MonthlyLabel>
            <MonthlyValue>
              {actualReport ? actualReport.expectedSavingsPercentage : 0}
            </MonthlyValue>
          </MonthlyCards>
        </MonthlyCardsWrapper>
      </MonthlyMainWrapper>
    </>
  );
};
