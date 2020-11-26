import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../redux/operations/userInfoOperation';
import decor from '../../assets/images/planPage/decor.svg';
import { PrognosisBuyStyled } from './prognosisBuyStyled';

function PrognosisBuy({ fields }) {
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
      const monthesResult = Math.ceil(
        requiredAmount / incomeToSavings - yearsResult * 12,
      );

      setYears(yearsResult);
      setMonthes(monthesResult);
    } else {
      setYears(0);
      setMonthes(0);
    }
  };

  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }

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
      <div className="wrapper">
        <h2>У вас будет квартира через:</h2>
        <form onSubmit={onHandleSubmit}>
          <label>
            <input
              type="text"
              name="years"
              value={
                !years
                  ? ''
                  : years + ' ' + declOfNum(years, ['год', 'года', 'лет'])
              }
              onChange={() => {}}
              placeholder="0 лет"
            />
            <span>Кол-во лет</span>
          </label>
          <label>
            <input
              type="text"
              name="monthes"
              value={
                !monthes
                  ? ''
                  : monthes +
                    ' ' +
                    declOfNum(monthes, ['месяц', 'месяца', 'месяцев'])
              }
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
