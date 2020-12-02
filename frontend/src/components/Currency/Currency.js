import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/Currency/currency-sprite.svg';

function Currency({ currencySvg, setCurrencySvg, setCurrency }) {
  const [isShowCurrency, setShowCurrency] = useState(false);
  const flatPrice = useSelector(state => state.user.info.flatPrice);

  const showCurrency = () => setShowCurrency(prevState => !prevState);

  const selectedCurrency = e => {
    setCurrencySvg(e.target.id);
    setShowCurrency(false);
  };

  const fetchExchangeRates = () => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(result => result.json())
      .then(result => {
        setCurrency({
          dollarRate: result[0].buy,
          euroRate: result[1].buy,
          hryvnaRate: 1,
        });
      });
  };

  useEffect(() => {
    fetchExchangeRates();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
