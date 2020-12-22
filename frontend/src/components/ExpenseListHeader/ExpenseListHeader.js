import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import CustomInput from '../../components/CustomInput/CustomInput';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import {
  ExpenseListHeaderWrapper,
  TabMode,
  TabsModeView,
} from './expenseListHeaderStyled';
import useNewData from './hooks/useNewData';

const ExpenseListHeader = ({ startDate, setStartDate, setIsDateSend }) => {
  const match = useRouteMatch();
  const [calendarIsOpen, openDatePicker] = useHandleBoolChange(false);
  const handleChange = date => {
    setStartDate(date);
    openDatePicker();
    setIsDateSend(false);
  };
  useNewData(startDate, setIsDateSend);
  return (
    <ExpenseListHeaderWrapper>
      <TabsModeView>
        <TabMode>
          <NavLink
            to={{
              pathname: `${match.url}/list`,
            }}
            className="tab-link"
            activeClassName="active-tab"
          >
            Список
          </NavLink>
        </TabMode>
        <TabMode>
          <NavLink
            to={{
              pathname: `${match.url}/categories`,
            }}
            className="tab-link"
            activeClassName="active-tab"
          >
            Категории
          </NavLink>
        </TabMode>
      </TabsModeView>
      <div>
        <DatePicker
          selected={startDate}
          locale={ru}
          onChange={handleChange}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          showTwoColumnMonthYearPicker
          open={calendarIsOpen}
          onClickOutside={openDatePicker}
          customInput={<CustomInput toggleOpen={openDatePicker} />}
          popperPlacement="bottom-end"
        />
      </div>
    </ExpenseListHeaderWrapper>
  );
};

export default ExpenseListHeader;
