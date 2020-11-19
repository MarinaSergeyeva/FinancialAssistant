import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Calculator from '../../components/Calculator/Calculator';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from '../ExpenseForm/expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';
import device, { Desktop, Mobile, Tablet } from '../../common/deviceSizes';

const ExpenseForm = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const [expenseItem, setHandleExpenseItem] = useState('');
  const [category, setHandleCategory] = useState('');
  const [amount, setHandleAmount] = useState('');

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const newTransaction = {
    //   expenseItem,
    //   category,
    //   amount,
    // };

    // setHandleExpenseItem('');
    // setHandleCategory('');
    // setHandleAmount('');
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  return (
    <ExpenseFormStyled>
      <form onSubmit={handleSubmit}>
        <div className="smallFormContainer">
          <label className="">
            <span>Со счета</span>
            <select value="value" type="text">
              <option value="value2" defaultValue>
                Карта VISA (Ваня)
              </option>
            </select>
            <p>Остаток на счете: 80 000 UAH</p>
          </label>
          <label>
            <span>Название статьи</span>
            <input type="text" />
          </label>

          <label>
            <span>На категорию</span>
            <select value="value" type="text">
              <option value="value2" defaultValue>
                Развлечения
              </option>
            </select>
          </label>
          <label>
            <span>Сумма</span>
            <input className="calc-input" type="number" />
          </label>
          <CalcIconStyled onClick={showCalculatorHandler}>
            <CalcIcon className="icon_hover" />
          </CalcIconStyled>
          {isMobileDevice ? (
            <Mobile>{showCalculator && <Calculator />}</Mobile>
          ) : (
            <CalcWrapper>{showCalculator && <Calculator />}</CalcWrapper>
          )}
          {/* <Mobile></Mobile> */}
          {/* <Tablet>
            <CalcWrapper>{showCalculator && <Calculator />}</CalcWrapper>
          </Tablet>
          <Desktop>
            <CalcWrapper>{showCalculator && <Calculator />}</CalcWrapper>
          </Desktop> */}
        </div>
      </form>
    </ExpenseFormStyled>
  );
};

export default ExpenseForm;
