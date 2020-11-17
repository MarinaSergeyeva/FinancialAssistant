import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import device from '../../common/deviceSizes';
import { PlanFormStyled } from '../PlanForm/planFormStyled';


import {
  UserInput,
  UserInputLabel,
  UserSelect,
} from '../../common/globalStyleComponents';

const ExpenseForm = () => {
  const [expenseItem, setHandleExpenseItem] = useState('');
  const [category, setHandleCategory] = useState('');
  const [amount, setHandleAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      expenseItem,
      category,
      amount,
    };

    setHandleExpenseItem('');
    setHandleCategory('');
    setHandleAmount('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <UserInputLabel>
        Название статьи
        <UserInput value={expenseItem} type="text" />
      </UserInputLabel>
      <UserInputLabel>
        На категорию
        <UserSelect value={expenseItem} type="text" option="Развлечения" />
      </UserInputLabel>
      <UserInputLabel>
        Сумма
        <UserInput value={expenseItem} type="number" />
      </UserInputLabel>
    </form>
  );
};

export default ExpenseForm;
