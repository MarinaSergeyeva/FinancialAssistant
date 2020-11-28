import React, { useState, useEffect } from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

function Currency({ state, getState }) {
  const [isShowCurrency, setShowCurrency] = useState(false);
  const [currencySvg, setCurrencySvg] = useState('icon-hryvna');

  const showCurrency = () => setShowCurrency(prevState => !prevState);

  const selectedCurrency = e => {
    setCurrencySvg(e.target.id);
  };

  const fetchRates = () => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(result => result.json())
      .then(result => console.log(result[0], result[1]));
  };
  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <CurrencyStyled>
      <div className="currencyWrapper">
        <svg className="iconCurrency selectedIconCurrency">
          <use href={sprite + `#${currencySvg}`} />
        </svg>
        <svg
          className={isShowCurrency ? 'iconArrowRotate' : 'iconArrow'}
          onClick={showCurrency}
        >
          <use href={sprite + '#icon-arrow'} />
        </svg>
      </div>
      {isShowCurrency && (
        <div className="currencyOption">
          <div className="currencyOptionWrapper">
            <svg
              className="iconCurrency iconHryvna"
              id="icon-hryvna"
              onClick={selectedCurrency}
            >
              <use href={sprite + '#icon-hryvna'} />
            </svg>
            <svg
              className="iconCurrency iconEuro"
              id="icon-euro"
              onClick={selectedCurrency}
            >
              <use href={sprite + '#icon-euro'} />
            </svg>
            <svg
              className="iconCurrency iconDollar"
              id="icon-dollar"
              onClick={selectedCurrency}
            >
              <use href={sprite + '#icon-dollar'} />
            </svg>
          </div>
        </div>
      )}
    </CurrencyStyled>
  );
}

export default Currency;
