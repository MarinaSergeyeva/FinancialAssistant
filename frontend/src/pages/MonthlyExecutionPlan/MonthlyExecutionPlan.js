import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './MonthlyExecutionPlan.module.css';
import ru from 'date-fns/locale/ru';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { useSelector, useDispatch } from 'react-redux';
import chartSelector from '../../redux/selectors/chartSelector';
import chartOperation from '../../redux/operations/chartOperations';
import { addMonths } from 'date-fns';
registerLocale('ru', ru);

export const MonthlyExecutionPlan = () => {
  let allReports;
  const [startDate, setStartDate] = useState(new Date());

  allReports = useSelector(state => {
    return chartSelector.getMonthlyReport(state);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chartOperation.getMonthReport(startDate));
  }, [startDate]);

  const onChange = dt => {
    setStartDate(dt);
  };

  const reportsNew = Object.values(allReports);
  const actualReport = reportsNew[0];

  const monthsBG = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  registerLocale('bg', {
    localize: {
      month: n => monthsBG[n],
    },
    formatLong: {},
  });

  return (
    <>
      <MonthlyMainWrapper>
        <MonthlyLabel>Месяц </MonthlyLabel>

        <DatePicker
          locale="bg"
          placeholderText="Укажите месяц ..."
          className={styles.Month_input}
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

//========
const MonthlyMainWrapper = styled.div`
  margin: 0 auto;
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
    margin-bottom: 0px;
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
