import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { ExpenseFormStyled } from '../ExpenseForm/expenseFormStyled';

const ExpenseForm = () => {
  const [expenseItem, setHandleExpenseItem] = useState('');
  const [category, setHandleCategory] = useState('');
  const [amount, setHandleAmount] = useState('');

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
        <div className="formContainer">
          <div className="leftFormContainer">
            <label>
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
          </div>
          <div className="rightFormContainer">
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
              <input type="number" />
            </label>
          </div>
        </div>
      </form>
    </ExpenseFormStyled>
  );
};

export default ExpenseForm;
