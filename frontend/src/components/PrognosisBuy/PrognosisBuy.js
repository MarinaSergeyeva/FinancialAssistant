import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../redux/operations/userOperations';
import decor from '../../assets/images/planPage/decor.svg';
import { PrognosisBuyStyled } from './prognosisBuyStyled';

// const time = {
//   years: 0,
//   monthes: 0,
// };

function PrognosisBuy({ fields }) {
  // const [state, getState] = useState(time);

  const incomeToSavings =
    ((fields.totalSalary + fields.passiveIncome) *
      fields.incomePercentageToSavings) /
    100;
  const requiredAmount = fields.flatPrice - fields.balance;
  const years = Math.floor(((requiredAmount / incomeToSavings) * 100) / 100);
  const monthes = Math.ceil(((requiredAmount % incomeToSavings) * 100) / 12000);

  // const reg = /\s/;
  // const yearsArray = years.toLocaleString().split();
  // const monthesArray = monthes.toLocaleString().split(); //! массив не работает

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]); //! не обновляються инпуты с расчетом лет - нужен useEffect ?*

  const dispatch = useDispatch();

  return (
    <PrognosisBuyStyled>
      {console.log('state!!!', fields)}
      {console.log('years!!!', years)}
      {console.log('monthes!!!', monthes)}
      {/* {console.log('yearsArray!!!', yearsArray)}
      {console.log('monthesArray!!!', monthesArray)} */}
      <div className="wrapper">
        <h2>У вас будет квартира через:</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch(operation.updateUserInfo(fields));
          }}
        >
          <label>
            <input
              type="number"
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
              type="number"
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
