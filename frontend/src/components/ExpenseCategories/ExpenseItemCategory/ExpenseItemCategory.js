import React from 'react';
import { useSelector } from 'react-redux';
import { transactionSelectors } from '../../../redux/selectors';
import {
  CategoryPercentage,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  CategoryAmount,
} from './expenseItemCatStyled';

function ExpenseItemCategory({ category }) {
  const transactions = useSelector(transactionSelectors.getExpensesCats);
  let name = '';
  let icon = '';
  for (let cat of expensesCategories) {
    const keyCat = Object.keys(cat)[0];
    if (keyCat === category) {
      name = cat[keyCat].name;
      icon = cat[keyCat].icon;
    }
  }
  return (
    <CategoryItem>
      <CategoryIcon>
        <use href={`#${icon}`}></use>
      </CategoryIcon>
      <CategoryName>{name}</CategoryName>
      <CategoryAmount>{`-${transactions[category]} грн.`}</CategoryAmount>
      <CategoryPercentage>{`${Math.round(
        (transactions[category] / transactions.totalAmount) * 100,
      )}%`}</CategoryPercentage>
    </CategoryItem>
  );
}

export default ExpenseItemCategory;

export const expensesCategories = [
  {
    other: {
      name: 'Другое',
      icon: 'other',
    },
  },
  {
    entertainment: {
      name: 'Развлечения',
      icon: 'cafe',
    },
  },
  {
    food: {
      name: 'Продукты',
      icon: 'food',
    },
  },
  {
    products: {
      name: 'Товары',
      icon: 'clothes',
    },
  },
  {
    transport: {
      name: 'Транспорт',
      icon: 'transport',
    },
  },
  {
    services: {
      name: 'ЖКХ',
      icon: 'home',
    },
  },
];
