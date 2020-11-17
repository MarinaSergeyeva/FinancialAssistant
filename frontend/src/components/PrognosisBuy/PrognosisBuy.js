import React from 'react';
import { PrognosisBuyStyled } from './prognosisBuyStyled';

function PrognosisBuy() {
  return (
    <PrognosisBuyStyled>
      <div className="wrapper">
        <span className="title">У вас будет квартира через:</span>
        <form>
          {/* <label>
            Кол-во лет
            <input type="text" name={} />
          </label>
          <label>
            Кол-во месяцев
            <input type="text" name={} />
          </label> */}
        </form>
      </div>
    </PrognosisBuyStyled>
  );
}

export default PrognosisBuy;
