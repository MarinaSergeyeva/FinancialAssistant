import React from 'react';
import { usePlanForm } from './hooks/usePlanForm';
import Currency from '../Currency/Currency';
import { PlanFormStyled } from './planFormStyled';

const placeHolder = 'Введите сумму';

function PlanForm({ state, getState }) {
  const { valuePlan, setStatePlan, onChangePlan } = usePlanForm(
    state,
    getState,
  );
  const { isFieldActive, currencySvg, rateValue, userInfo } = valuePlan;
  const { setCurrency, setCurrencySvg } = setStatePlan;
  const {
    onHandleChange,
    onSetRateValue,
    onHandleFocus,
    onHandleBlur,
  } = onChangePlan;
  return (
    <PlanFormStyled>
      <form>
        <div className="firstColumn">
          <label>
            <span>1. ЗП обоих супругов</span>
            <input
              type="number"
              name="totalSalary"
              value={
                !userInfo.totalSalary ? state.totalSalary : userInfo.totalSalary
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
              value={
                !userInfo.passiveIncome
                  ? state.passiveIncome
                  : userInfo.passiveIncome
              }
              placeholder={placeHolder}
              onChange={onHandleChange}
            />
          </label>
          <label>
            <span>3. Сбережения</span>
            <input
              type="number"
              name="balance"
              value={!userInfo.balance ? state.balance : userInfo.balance}
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
              value={!userInfo.flatPrice ? rateValue : userInfo.flatPrice}
              placeholder={placeHolder}
              onChange={onSetRateValue}
            />
          </label>
          <label>
            <span>5. Укажите кол-во кв. м вашей будущей квартиры</span>
            <input
              type="number"
              name="flatSquareMeters"
              value={
                !userInfo.flatSquareMeters
                  ? state.flatSquareMeters
                  : userInfo.flatSquareMeters
              }
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
                !userInfo.incomePercentageToSavings
                  ? state.incomePercentageToSavings
                  : userInfo.incomePercentageToSavings
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
