import React from 'react';
import styled from 'styled-components';

const ExpenseListItem = () => {
  return (
    <Wrapper>
      <Date>19.12.2019</Date>
      <ExpenseName>Корм для кошек</ExpenseName>
      <Value>200 грн</Value>
      <CategoryWrapper>
        <IconWrapper></IconWrapper>
        <Category>Дом</Category>
      </CategoryWrapper>
      <EditButton></EditButton>
    </Wrapper>
  );
};

export default ExpenseListItem;

const Wrapper = styled.div`
  background-color: palevioletred;
`;

const Date = styled.p``;

const ExpenseName = styled.h3``;

const Value = styled.p``;

const CategoryWrapper = styled.div``;

const IconWrapper = styled.div``;

const Category = styled.p``;

const EditButton = styled.button``;
