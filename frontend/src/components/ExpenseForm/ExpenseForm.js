import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { PlanFormStyled } from '../PlanForm/planFormStyled';

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
    <PlanFormStyled>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Со счета</span>
          <select value='value' type="text">
            <option value="value2" selected>Карта VISA (Ваня)</option>
          </select>
          <p>Остаток на счете: 80 000 UAH</p>
        </label>
        
        <label>
         <span>Название статьи</span>
          <input type="text" />
        </label>
        <label>
          <span>На категорию</span>
          <select value='value' type="text">
            <option value="value2" selected>Развлечения</option>
          </select>
        </label>
        <label>
         <span>Сумма</span> 
          <input type="number" />
        </label>
      </form>
    </PlanFormStyled>
  );
};

export default ExpenseForm;
