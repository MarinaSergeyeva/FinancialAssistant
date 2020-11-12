import React, { useState } from 'react';
import { PlanFormStyled } from './planFormStyled';

const placeHolder = 'Введите сумму';
const field = {
  salary: '',
  passiveIncome: '',
  saving: '',
  apartmentCost: '',
  apartmentArea: '',
  accumulation: '',
};

function PlanForm() {
  const [state, getState] = useState(field);

  return (
    <PlanFormStyled>
      <form onSubmit={() => {}}>
        <label>
          1. ЗП обоих супругов
          <input
            type="text"
            name="salary"
            value={state.salary}
            placeholder={placeHolder}
            onChange={e => getState({ ...state, salary: e.target.value })}
          />
        </label>
        <label>
          2. Пассивные доходы, мес.
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
          3. Сбережения
          <input
            type="text"
            name="saving"
            value={state.saving}
            placeholder={placeHolder}
            onChange={e => getState({ ...state, saving: e.target.value })}
          />
        </label>{' '}
        <label>
          4. Укажите стоимость вашей будущей квартиры
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
          5. Укажите кол-во кв. м вашей будущей квартиры
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
          6. Накопление, %
          <input
            type="text"
            name="accumulation"
            value={state.accumulation}
            placeholder={placeHolder}
            onChange={e => getState({ ...state, accumulation: e.target.value })}
          />
        </label>
      </form>
    </PlanFormStyled>
  );
}

export default PlanForm;
