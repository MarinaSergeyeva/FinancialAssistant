import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { transactionSelectors } from '../../redux/selectors';
import { size } from '../../common/deviceSizes';

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

const CategoryPercentage = styled.span`
  min-width: 30px;
  text-align: right;
`;

const CategoryItem = styled.li`
  padding: 18px 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  background: rgba(24, 25, 31, 0.03);
  border-radius: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.36);
  box-shadow: 0px;
`;

const CategoryName = styled.span`
  margin-bottom: 15px;
  min-width: 190px;
  @media (min-width: ${size.tablet}) {
    margin-bottom: 0;
  }
`;

const CategoryIcon = styled.svg`
  margin-right: 10px;
  margin-bottom: 15px;
  width: 18px;
  height: 18px;
  fill: #7c9af2;
  @media (min-width: ${size.tablet}) {
    margin-bottom: 0;
  }
`;

const CategoryAmount = styled.span`
  margin-right: 110px;
  padding-left: 25px;
  min-width: 85px;
  text-align: right;
  @media (min-width: ${size.tablet}) {
    padding-left: 0;
  }
`;

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
