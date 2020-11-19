import React, { useState } from 'react';
import Calculator from '../../components/Calculator/Calculator';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from '../ExpenseForm/expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';

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
  return (
    <ExpenseFormStyled>
      <form onSubmit={handleSubmit}>
        {/* <div className="formContainer"> */}
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

          <CalcWrapper>{showCalculator && <Calculator />}</CalcWrapper>
          {/* </div> */}
        </div>
      </form>
    </ExpenseFormStyled>
  );
};

export default ExpenseForm;
