import React, { useState } from 'react';
import { PlanFormStyled } from './planFormStyled';

const placeHolder = 'Введите сумму';
const field = {
  salary: '',
  passiveIncome: '',
  saving: '',
  apartmentCost: '',
  apartmentArea: '',
  accumulation: { inputValue: '', helperText: false },
};

function PlanForm() {
  const [state, getState] = useState(field);
  const [isFieldActive, setFieldActive] = useState(false);

  return (
    <PlanFormStyled>
      <form onSubmit={() => {}}>
        <div className="firstColumn">
          <label>
            <span>1. ЗП обоих супругов</span>
            <input
              type="text"
              name="salary"
              value={state.salary}
              placeholder={placeHolder}
              onChange={e => getState({ ...state, salary: e.target.value })}
            />
          </label>
          <label>
            <span>2. Пассивные доходы, мес.</span>
            <input
              type="text"
              name="passiveIncome"
              value={state.passiveIncome}
              placeholder={placeHolder}
              onChange={e =>
                getState({ ...state, passiveIncome: e.target.value })
              }
            />
          </label>
          <label>
            <span>3. Сбережения</span>
            <input
              type="text"
              name="saving"
              value={state.saving}
              placeholder={placeHolder}
              onChange={e => getState({ ...state, saving: e.target.value })}
            />
          </label>
        </div>
        <div className="secondColumn">
          <label>
            <span>4. Укажите стоимость вашей будущей квартиры</span>
            <input
              type="text"
              name="apartmentCost"
              value={state.apartmentCost}
              placeholder={placeHolder}
              onChange={e =>
                getState({ ...state, apartmentCost: e.target.value })
              }
            />
          </label>
          <label>
            <span>5. Укажите кол-во кв. м вашей будущей квартиры</span>
            <input
              type="text"
              name="apartmentArea"
              value={state.apartmentArea}
              placeholder={placeHolder}
              onChange={e =>
                getState({ ...state, apartmentArea: e.target.value })
              }
            />
          </label>
          <label>
            <span>6. Накопление, %</span>
            <input
              type="text"
              name="accumulation"
              value={state.accumulation.inputValue}
              placeholder={placeHolder}
              onFocus={() => setFieldActive(true)}
              onBlur={() => setFieldActive(false)}
              onChange={e =>
                getState({
                  ...state,
                  accumulation: {
                    ...state.accumulation,
                    inputValue: e.target.value,
                  },
                })
              }
            />
            {/* {console.log(state.accumulation.helperText)} */}
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
