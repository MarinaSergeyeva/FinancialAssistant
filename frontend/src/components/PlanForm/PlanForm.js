import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PlanFormStyled } from './planFormStyled';
// import { userSelectors } from '../../redux/selectors';

const placeHolder = 'Введите сумму';

function PlanForm({ state, getState }) {
  const [isFieldActive, setFieldActive] = useState(false);

  const infoCurrentUser = useSelector(state => state.user.info);

  const inputValue = stateValue => {
    if (!stateValue) {
      return '';
    } else return stateValue;
    // infoCurrentUserValue&&infoCurrentUserValues
  };

  const onHandleChange = e => {
    getState({ ...state, [e.target.name]: e.target.value });
  };

  const onHandleFocus = () => setFieldActive(true);
  const onHandleBlur = () => setFieldActive(false);

  return (
    <PlanFormStyled>
      <form>
        <div className="firstColumn">
          <label>
            <span>1. ЗП обоих супругов</span>
            {console.log('infoCurrentUser', infoCurrentUser)}
            {console.log('state', state)}
            <input
              type="number"
              name="totalSalary"
              // value={!state.totalSalary ? '' : state.totalSalary}
              // value={
              //   infoCurrentUser.totalSalary ? '' : infoCurrentUser.totalSalary
              // }
              value={
                infoCurrentUser.totalSalary === 0
                  ? inputValue(state.totalSalary)
                  : infoCurrentUser.totalSalarys
              }
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
          <label>
            <span>2. Пассивные доходы, мес.</span>
            <input
              type="number"
              name="passiveIncome"
              value={!state.passiveIncome ? '' : state.passiveIncome}
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
          <label>
            <span>3. Сбережения</span>
            <input
              type="number"
              name="balance"
              value={!state.balance ? '' : state.balance}
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
        </div>
        <div className="secondColumn">
          <label>
            <span>4. Укажите стоимость вашей будущей квартиры</span>
            <input
              type="number"
              name="flatPrice"
              value={!state.flatPrice ? '' : state.flatPrice}
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
          <label>
            <span>5. Укажите кол-во кв. м вашей будущей квартиры</span>
            <input
              type="number"
              name="flatSquareMeters"
              value={!state.flatSquareMeters ? '' : state.flatSquareMeters}
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
          <label>
            <span>6. Накопление, %</span>
            <input
              type="number"
              name="incomePercentageToSavings"
              value={
                !state.incomePercentageToSavings
                  ? ''
                  : state.incomePercentageToSavings
              }
              placeholder={placeHolder}
              onFocus={onHandleFocus}
              onBlur={onHandleBlur}
              onChange={onHandleChange}
            />
            <p>
              {!!isFieldActive &&
                'Укажите процент, который бы хотели накапливать в месяц от общей суммы доходов и вы увидите, когда достигните цели'}
            </p>
          </label>
        </div>
      </form>
    </PlanFormStyled>
  );
}

export default PlanForm;
