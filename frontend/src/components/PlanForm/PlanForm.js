import React, { useEffect, useState } from 'react';
import { PlanFormStyled } from './planFormStyled';
import Currency from './Currency';

const placeHolder = 'Введите сумму';

function PlanForm({ state, getState }) {
  const [isFieldActive, setFieldActive] = useState(false);
  const [currency, setCurrency] = useState({});
  const [currencySvg, setCurrencySvg] = useState('hryvnaRate');
  const [rateValue, setRateValue] = useState('');

  const onHandleChange = e => {
    getState({ ...state, [e.target.name]: e.target.value });
  };
  const setFlatPrice = () => {
    getState({
      ...state,
      flatPrice:
        Number(rateValue) *
        (currency[currencySvg] ? Number(currency[currencySvg]) : 1),
    });
  };
  const onSetRateValue = e => {
    setRateValue(e.target.value);
    getState({
      ...state,
      [e.target.name]:
        Number(e.target.value) *
        (currency[currencySvg] ? Number(currency[currencySvg]) : 1),
    });
  };
  useEffect(() => {
    setFlatPrice();
  }, [currencySvg]);

  const onHandleFocus = () => setFieldActive(true);
  const onHandleBlur = () => setFieldActive(false);

  return (
    <PlanFormStyled>
      <form>
        <div className="firstColumn">
          <label>
            <span>1. ЗП обоих супругов</span>
            <input
              type="number"
              name="totalSalary"
              value={!state.totalSalary ? '' : state.totalSalary}
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
            <Currency
              currencySvg={currencySvg}
              setCurrencySvg={setCurrencySvg}
              setCurrency={setCurrency}
            />
            <input
              type="number"
              name="flatPrice"
              value={rateValue}
              placeholder={placeHolder}
              onChange={onSetRateValue}
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
              {isFieldActive &&
                'Укажите процент, который бы хотели накапливать в месяц от общей суммы доходов и вы увидите, когда достигните цели'}
            </p>
          </label>
        </div>
      </form>
    </PlanFormStyled>
  );
}

export default PlanForm;
