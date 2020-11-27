import React, { useState, useEffect } from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

function Currency({ state, getState }) {
  const [isShowCurrency, setShowCurrency] = useState(false);

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    // return () => {
    //   cleanup;
    // };
  }, []);

  const showCurrency = () => setShowCurrency(prevState => !prevState);

  return (
    <CurrencyStyled>
      <div className="currencyWrapper">
        <svg className="iconCurrency">
          <use href={sprite + '#icon-hryvna'} />
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
            <svg className="iconCurrency">
              <use href={sprite + '#icon-hryvna'} />
            </svg>
            <svg className="iconCurrency">
              <use href={sprite + '#icon-euro'} />
            </svg>
            <svg className="iconCurrency iconDollar">
              <use href={sprite + '#icon-dollar'} />
            </svg>
          </div>
        </div>
      )}
    </CurrencyStyled>
  );
}

export default Currency;
