import { useState, useEffect, useCallback } from 'react';
import useReduxState from '../../../hooks/useReduxState';

export const useCurrency = (setCurrencySvg, setCurrency) => {
  const [isShowCurrency, setShowCurrency] = useState(false);
  const showCurrency = () => setShowCurrency(prevState => !prevState);
  const { userInfo } = useReduxState();
  const { flatPrice } = userInfo;

  const selectedCurrency = e => {
    setCurrencySvg(e.target.id);
    setShowCurrency(false);
  };

  const fetchExchangeRates = useCallback(() => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(result => result.json())
      .then(result => {
        setCurrency({
          dollarRate: result[0].buy,
          euroRate: result[1].buy,
          hryvnaRate: 1,
        });
      });
  }, [setCurrency]);

  useEffect(() => fetchExchangeRates(), [fetchExchangeRates]);

  return {
    valueCurrency: { flatPrice, isShowCurrency },
    methodCurrency: { showCurrency, selectedCurrency },
  };
};
