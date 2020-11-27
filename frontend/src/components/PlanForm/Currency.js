import React, { useState, useEffect } from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

function Currency({ state, getState }) {
  const [isShowCurrency, setShowCurrency] = useState(false);
  const [currencySvg, setCurrencySvg] = useState('icon-hryvna');

  const showCurrency = () => setShowCurrency(prevState => !prevState);

  const selectedCurrency = e => {
    // console.log('e.target', e.target);
    // console.log('name', e.target.id);
    setCurrencySvg(e.target.id); //! объект, а нужна строка e.target.id
  };
  // useEffect(() => {
  // fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  // return () => {
  //   cleanup;
  // };
  // selectedCurrency();
  // }, [currencySvg]);

  return (
    <CurrencyStyled>
      {console.log('currencySvg', currencySvg)}
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
              className="iconCurrency"
              id="icon-hryvna"
              onClick={selectedCurrency}
            >
              <use href={sprite + '#icon-hryvna'} />
            </svg>
            <svg
              className="iconCurrency"
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
