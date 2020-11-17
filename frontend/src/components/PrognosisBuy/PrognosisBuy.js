import React from 'react';
import { PrognosisBuyStyled } from './prognosisBuyStyled';

function PrognosisBuy() {
  return (
    <PrognosisBuyStyled>
      <div className="wrapper">
        <h2>У вас будет квартира через:</h2>
        <form>
          <label>
            <input type="text" placeholder="0 лет" />
            <span>Кол-во лет</span>
          </label>
          <label>
            <input type="text" placeholder="0 месяцев" />
            <span>Кол-во месяцев</span>
          </label>
          <button type="submit">Подходит</button>
        </form>
      </div>
    </PrognosisBuyStyled>
  );
}

export default PrognosisBuy;
