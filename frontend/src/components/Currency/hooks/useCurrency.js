import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useCurrency = (setCurrencySvg, setCurrency) => {
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

  return {
    valueCurrency: { flatPrice, isShowCurrency },
    methodCurrency: { showCurrency, selectedCurrency },
  };
};
