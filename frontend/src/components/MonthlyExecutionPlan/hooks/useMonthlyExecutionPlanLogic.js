import { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import useReduxState from '../../../hooks/useReduxState';
import chartOperations from '../../../redux/operations/chartOperations';
import ru from 'date-fns/locale/ru';
import { useDispatch } from 'react-redux';
registerLocale('ru', ru);

const useMonthlyExecutionPlanLogic = () => {
  const curDateMonth = new Date();
  const [startDate, setStartDate] = useState(
    new Date(
      curDateMonth.getFullYear(),
      curDateMonth.getMonth() - 1,
      curDateMonth.getMonth(),
    ),
  );
  const { monthReports } = useReduxState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chartOperations.getMonthReport(startDate));
  }, [dispatch, startDate]);

  const onChange = dt => {
    setStartDate(dt);
  };

  const reportsNew = Object.values(monthReports);
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

  return {
    values: { startDate, actualReport },
    onChange,
  };
};

export default useMonthlyExecutionPlanLogic;
