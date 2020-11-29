import React, { useState, useEffect } from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

const exchangeRatesInit = {
  dollarRate: 1,
  euroRate: 1,
  // hryvna: 1,
};

function Currency({ currencySvg, setCurrencySvg, setCurrency }) {
  const [isShowCurrency, setShowCurrency] = useState(false);

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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------- ------------- -----------
// import React, { useState, useEffect } from 'react';
// import { CurrencyStyled } from './currencyStyled';
// import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

// const exchangeRatesInit = {
//   dollarRate: 1,
//   euroRate: 1,
//   // hryvna: 1,
// };

// const initialHryvna = {
//   name: 'UAH',
//   price: 1,
//   icon: 'hryvnaRate',
// };
// const initialEuro = {
//   name: 'EUR',
//   price: 1,
//   icon: 'euroRate',
// };
// const initialDollar = {
//   name: 'USD',
//   price: 1,
//   icon: 'dollarRate',
// };

// function Currency({ state, getState }) {
//   const [isShowCurrency, setShowCurrency] = useState(false);
//   const [currencySvg, setCurrencySvg] = useState('hryvnaRate');

//   const [hryvna, setHryvna] = useState(initialHryvna);
//   const [euro, setEuro] = useState(initialEuro);
//   const [dollar, setDollar] = useState(initialDollar);
//   // const [selectCurrency, setSelectCurrency] = useState('UAH');
//   const [exchangeRates, setExchangeRates] = useState(exchangeRatesInit);

//   const showCurrency = () => setShowCurrency(prevState => !prevState);

//   // const convertCurrency = () => {
//   //   if (currencySvg === 'hryvnaRate') {
//   //     setSelectCurrency('UAH');
//   //     getState({ ...state, flatPrice: state.flatPrice });
//   //   } else if (currencySvg === 'dollarRate') {
//   //     setSelectCurrency('USD');
//   //     const convertFlatPrice = state.flatPrice / exchangeRates.dollarRate.buy;
//   //     getState({ ...state, flatPrice: convertFlatPrice });
//   //   } else if (currencySvg === 'euroRate') {
//   //     setSelectCurrency('EUR');
//   //     const convertFlatPrice = state.flatPrice / exchangeRates.euroRate.buy;
//   //     getState({ ...state, flatPrice: convertFlatPrice });
//   //   }
//   // };

//   const selectedCurrency = e => {
//     setCurrencySvg(e.target.id);
//     if (currencySvg === 'hryvnaRate') {
//       setHryvna({ ...hryvna, price: 1 });
//       getState({ ...state, flatPrice: state.flatPrice });
//     } else if (currencySvg === 'dollarRate') {
//       setDollar({ ...dollar, price: exchangeRates.dollarRate.buy });
//       setCurrencySvg(prevState => {
//         if (prevState === 'euroRate') {
//           //
//         }
//       });
//     } else if (currencySvg === 'euroRate') {
//       setEuro({ ...euro, price: exchangeRates.euroRate.buy });
//     }

//     // convertCurrency();
//   };

//   const fetchExchangeRates = () => {
//     fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
//       .then(result => result.json())
//       .then(result => {
//         setExchangeRates({ dollarRate: result[0], euroRate: result[1] });
//       });
//   };

//   useEffect(() => {
//     fetchExchangeRates();
//   }, []);

//   return (
//     <CurrencyStyled>
//       {console.log(
//         exchangeRates,
//         exchangeRates.dollarRate.buy,
//         exchangeRates.euroRate.buy,
//       )}
//       <div className="currencyWrapper">
//         <svg className="iconCurrency selectedIconCurrency">
//           <use href={sprite + `#${currencySvg}`} />
//         </svg>
//         <svg
//           className={isShowCurrency ? 'iconArrowRotate' : 'iconArrow'}
//           onClick={showCurrency}
//         >
//           <use href={sprite + '#icon-arrow'} />
//         </svg>
//       </div>
//       {isShowCurrency && (
//         <div className="currencyOption">
//           <div className="currencyOptionWrapper">
//             <svg
//               className="iconCurrency iconHryvna"
//               id="hryvnaRate"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#hryvnaRate'} />
//             </svg>
//             <svg
//               className="iconCurrency iconEuro"
//               id="euroRate"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#euroRate'} />
//             </svg>
//             <svg
//               className="iconCurrency iconDollar"
//               id="dollarRate"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#dollarRate'} />
//             </svg>
//           </div>
//         </div>
//       )}
//     </CurrencyStyled>
//   );
// }

// export default Currency;

//
//----------- ----------- ------------- --------------
