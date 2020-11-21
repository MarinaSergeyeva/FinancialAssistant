import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../redux/operations/userOperations';
import decor from '../../assets/images/planPage/decor.svg';
import { PrognosisBuyStyled } from './prognosisBuyStyled';

function PrognosisBuy({ fields }) {
  // const [state, getState] = useState(time);
  const [years, setYears] = useState(0);
  const [monthes, setMonthes] = useState(0);

  const getResult = () => {
    if (
      (fields.totalSalary || fields.passiveIncome || fields.balance) &&
      fields.flatPrice &&
      fields.incomePercentageToSavings &&
      fields.balance <= fields.flatPrice
    ) {
      const incomeToSavings =
        ((Number(fields.totalSalary) + Number(fields.passiveIncome)) *
          Number(fields.incomePercentageToSavings)) /
        100;
      const requiredAmount = Number(fields.flatPrice) - Number(fields.balance);
      const yearsResult = Math.floor(requiredAmount / incomeToSavings / 12);
      // const monthesResult = Math.ceil(requiredAmount % incomeToSavings);
      const monthesResult = Math.ceil(
        requiredAmount / incomeToSavings - yearsResult * 12,
      );

      setYears(yearsResult);
      setMonthes(monthesResult);
    } else {
      setYears(0);
      setMonthes(0);
    }
    // const reg = /\s/;
    // const yearsArray = years.toLocaleString().split('');
    // const monthesArray = monthes.toString().split('');
  };

  useEffect(() => {
    getResult();
  }, [fields]);
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(operation.updateUserInfo(fields));
  };

  return (
    <PrognosisBuyStyled>
      {/* {console.log('state!!!', fields)} */}
      {/* {console.log('incomeToSaving', incomeToSavings)} */}
      {/* {console.log('years!!!', years)}
      {console.log('monthes!!!', monthes)} */}
      {/* {console.log('yearsArray!!!', yearsArray)}
      {console.log('monthesArray!!!', monthesArray)} */}
      <div className="wrapper">
        <h2>У вас будет квартира через:</h2>
        <form onSubmit={onHandleSubmit}>
          <label>
            <input
              type="text"
              name="years"
              value={`${years} ${
                'лет'
                // yearsArray.length - 1 === '1' && 'год'
                //   ? (yearsArray.length - 1 === '2' && 'года') ||
                //     (yearsArray.length - 1 === '3' && 'года') ||
                //     (yearsArray.length - 1 === '4' && 'года')
                //   : 'лет'
              }`}
              onChange={() => {}}
              placeholder="0 лет"
            />
            <span>Кол-во лет</span>
          </label>
          <label>
            <input
              type="text"
              name="monthes"
              value={`${monthes} месяцев`}
              onChange={() => {}}
              placeholder="0 месяцев"
            />
            <span>Кол-во месяцев</span>
          </label>
          <button type="submit">Подходит</button>
        </form>
      </div>
      <img src={decor} alt="элемент декора" />
    </PrognosisBuyStyled>
  );
}

export default PrognosisBuy;
