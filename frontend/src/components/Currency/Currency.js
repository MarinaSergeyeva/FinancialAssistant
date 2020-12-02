import React from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/Currency/currency-sprite.svg';
import { useCurrency } from './hooks/useCurrency';

function Currency({ currencySvg, setCurrencySvg, setCurrency }) {
  const { valueCurrency, methodCurrency } = useCurrency(
    setCurrencySvg,
    setCurrency,
  );
  const { flatPrice, isShowCurrency } = valueCurrency;
  const { showCurrency, selectedCurrency } = methodCurrency;

  return (
    <CurrencyStyled>
      <div className="currencyWrapper">
        <svg className="iconCurrency selectedIconCurrency">
          <use href={sprite + `#${currencySvg}`} />
        </svg>
        {!flatPrice && (
          <svg
            className={isShowCurrency ? 'iconArrowRotate' : 'iconArrow'}
            onClick={showCurrency}
          >
            <use href={sprite + '#icon-arrow'} />
          </svg>
        )}
      </div>
      {isShowCurrency && (
        <div className="currencyOption">
          <ul className="currencyOptionWrapper">
            <li>
              <svg
                className="iconCurrency iconHryvna"
                id="hryvnaRate"
                onClick={selectedCurrency}
              >
                <use href={sprite + '#hryvnaRate'} />
              </svg>
            </li>
            <li>
              <svg
                className="iconCurrency iconEuro"
                id="euroRate"
                onClick={selectedCurrency}
              >
                <use href={sprite + '#euroRate'} />
              </svg>
            </li>
            <li>
              <svg
                className="iconCurrency iconDollar"
                id="dollarRate"
                onClick={selectedCurrency}
              >
                <use href={sprite + '#dollarRate'} />
              </svg>
            </li>
          </ul>
        </div>
      )}
    </CurrencyStyled>
  );
}

export default Currency;
