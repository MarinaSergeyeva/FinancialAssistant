import { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import useDispatchOperation from '../../../hooks/useDispatchOperation';
import useReduxState from '../../../hooks/useReduxState';
import chartOperations from '../../../redux/operations/chartOperations';
import ru from 'date-fns/locale/ru';
import { useDispatch } from 'react-redux';
registerLocale('ru', ru);

const useMonthlyExecutionPlanLogic = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { monthReports } = useReduxState();

  //   useDispatchOperation(startDate, chartOperations.getMonthReport(startDate));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chartOperations.getMonthReport(startDate));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

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
