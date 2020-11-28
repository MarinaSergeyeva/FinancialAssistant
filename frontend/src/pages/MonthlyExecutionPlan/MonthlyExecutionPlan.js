import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './MonthlyExecutionPlan.module.css';
import ru from 'date-fns/locale/ru';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { connect, useSelector, useDispatch } from 'react-redux';
//import getCurrentUser from "../../redux/selectors/userSelectors";
import userSelectors from '../../redux/selectors/userSelectors';
import chartSelector from '../../redux/selectors/chartSelector';
import chartOperation from '../../redux/operations/chartOperations';
registerLocale('ru', ru);
//console.log('userSelectors', userSelectors)

export const MonthlyExecutionPlan = () => {
  let allReports;
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chartOperation.getMonthReport(startDate));
  }, [startDate]);

  const onChange = dt => {
    //console.log('startDate', getDate(dt).month, getDate(dt).year);
    setStartDate(dt);
  };
  allReports = useSelector(state => {
    return chartSelector.getMonthlyReport(state);
  });
  //console.log('allReports', allReports);

  const reportsNew = Object.values(allReports);
  const actualReport = reportsNew[0];

  console.log('actualReport', actualReport);

  function getDate(startDate) {
    const data = new Date(startDate);
    //startDate.getFullYear(),
    const month = data.getMonth() + 1;
    const year = data.getFullYear();
    //startDate.getDate(),
    const dataForRequest = { month, year };
    return dataForRequest;
  }

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
          // onChange={reportDate => setStartDate(reportDate)}
          onChange={onChange}
          dateFormat="MMMM YYY"
          showMonthYearPicker
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
          isClearable
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
//========
// console.log('getDate()', getDate(startDate));
// const userBalance = useSelector(state => {
//   return userSelectors.getCurrentUser(state);
// });
// console.log('userBalance', userBalance);
// const { balance, totalSalary, flatPrice } = userBalance;
