import React, { useState, useEffect } from 'react';
import { CurrencyStyled } from './currencyStyled';
import sprite from '../../assets/icons/PlanForm/currency-sprite.svg';

const exchangeRatesInit = {
  dollarRate: 1,
  euroRate: 1,
  // hryvna: 1,
};

function Currency({ state, getState, getCurrency }) {
  const [isShowCurrency, setShowCurrency] = useState(false);
  const [currencySvg, setCurrencySvg] = useState('icon-hryvna');
  // const [selectCurrency, setSelectCurrency] = useState('UAH');
  const [exchangeRates, setExchangeRates] = useState(exchangeRatesInit);

  const showCurrency = () => setShowCurrency(prevState => !prevState);

  // const convertCurrency = () => {
  //   if (currencySvg === 'icon-hryvna') {
  //     // setSelectCurrency('UAH');
  //     getState({ ...state, flatPrice: state.flatPrice });
  //   } else if (currencySvg === 'icon-dollar') {
  //     // setSelectCurrency('USD');
  //     const convertFlatPrice = state.flatPrice / exchangeRates.dollarRate.buy;
  //     getState({ ...state, flatPrice: convertFlatPrice });
  //   } else if (currencySvg === 'icon-euro') {
  //     // setSelectCurrency('EUR');
  //     const convertFlatPrice = state.flatPrice / exchangeRates.euroRate.buy;
  //     getState({ ...state, flatPrice: convertFlatPrice });
  //   }
  // };

  const selectedCurrency = e => {
    setCurrencySvg(e.target.id);
    // if(currencySvg==="icon-hryvna"){setSelectCurrency("USD")}
    // convertCurrency();
  };

  const fetchExchangeRates = () => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(result => result.json())
      .then(result => {
        getCurrency({{ dollarRate: result[0], euroRate: result[1] }, {} });
        setExchangeRates({ dollarRate: result[0], euroRate: result[1] });
      });
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <CurrencyStyled>
      {console.log(
        exchangeRates,
        exchangeRates.dollarRate.buy,
        exchangeRates.euroRate.buy,
      )}
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

//--------------------------
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
//   icon: 'icon-hryvna',
// };
// const initialEuro = {
//   name: 'EUR',
//   price: 1,
//   icon: 'icon-euro',
// };
// const initialDollar = {
//   name: 'USD',
//   price: 1,
//   icon: 'icon-dollar',
// };

// function Currency({ state, getState }) {
//   const [isShowCurrency, setShowCurrency] = useState(false);
//   const [currencySvg, setCurrencySvg] = useState('icon-hryvna');

//   const [hryvna, setHryvna] = useState(initialHryvna);
//   const [euro, setEuro] = useState(initialEuro);
//   const [dollar, setDollar] = useState(initialDollar);
//   // const [selectCurrency, setSelectCurrency] = useState('UAH');
//   const [exchangeRates, setExchangeRates] = useState(exchangeRatesInit);

//   const showCurrency = () => setShowCurrency(prevState => !prevState);

//   // const convertCurrency = () => {
//   //   if (currencySvg === 'icon-hryvna') {
//   //     setSelectCurrency('UAH');
//   //     getState({ ...state, flatPrice: state.flatPrice });
//   //   } else if (currencySvg === 'icon-dollar') {
//   //     setSelectCurrency('USD');
//   //     const convertFlatPrice = state.flatPrice / exchangeRates.dollarRate.buy;
//   //     getState({ ...state, flatPrice: convertFlatPrice });
//   //   } else if (currencySvg === 'icon-euro') {
//   //     setSelectCurrency('EUR');
//   //     const convertFlatPrice = state.flatPrice / exchangeRates.euroRate.buy;
//   //     getState({ ...state, flatPrice: convertFlatPrice });
//   //   }
//   // };

//   const selectedCurrency = e => {
//     setCurrencySvg(e.target.id);
//     if (currencySvg === 'icon-hryvna') {
//       setHryvna({ ...hryvna, price: 1 });
//       getState({ ...state, flatPrice: state.flatPrice });
//     } else if (currencySvg === 'icon-dollar') {
//       setDollar({ ...dollar, price: exchangeRates.dollarRate.buy });
//       setCurrencySvg(prevState => {
//         if (prevState === 'icon-euro') {
//           //
//         }
//       });
//     } else if (currencySvg === 'icon-euro') {
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
//               id="icon-hryvna"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#icon-hryvna'} />
//             </svg>
//             <svg
//               className="iconCurrency iconEuro"
//               id="icon-euro"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#icon-euro'} />
//             </svg>
//             <svg
//               className="iconCurrency iconDollar"
//               id="icon-dollar"
//               onClick={selectedCurrency}
//             >
//               <use href={sprite + '#icon-dollar'} />
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
