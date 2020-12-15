import React from 'react';
import useReduxState from '../../../hooks/useReduxState';
import useItemFields from '../hooks/useItemFields';
import {
  CategoryPercentage,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  CategoryAmount,
} from './expenseItemCatStyled';
import { lazy } from 'react';

function ExpenseItemCategory({ category }) {
  const { userTransactions } = useReduxState();
  const { expenseStats } = userTransactions;
  const { name, icon } = useItemFields(category);
  const Icon = lazy(() => import(`../../Icons/${icon}`));
  return (
    <CategoryItem>
      <CategoryIcon>
        <Icon />
      </CategoryIcon>
      <CategoryName>{name}</CategoryName>
      <CategoryAmount>{`-${expenseStats[category]} грн.`}</CategoryAmount>
      <CategoryPercentage>{`${Math.round(
        (expenseStats[category] / expenseStats.totalAmount) * 100,
      )}%`}</CategoryPercentage>
    </CategoryItem>
  );
}

export default ExpenseItemCategory;
