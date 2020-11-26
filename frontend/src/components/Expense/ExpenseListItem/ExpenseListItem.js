import React from 'react';
import styled from 'styled-components';
import otherImg from '../../../assets/images/expenseListItem/other.svg';
import editImg from '../../../assets/images/expenseListItem/edit.svg';

const ExpenseListItem = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Date>19.12.2019</Date>
        <ExpenseName>Корм для кошек</ExpenseName>
      </LeftWrapper>
      <RightWrapper>
        <WrapperSecondary2>
          <Value>200 грн</Value>
          <WrapperSecondary>
            <CategoryWrapper>
              <IconWrapper>
                <img width="20" height="20" alt="other" src={otherImg} />
              </IconWrapper>
              <Category>Дом</Category>
            </CategoryWrapper>
          </WrapperSecondary>
        </WrapperSecondary2>
        <EditButton>
          <img width="20" height="20" alt="other" src={editImg} />
        </EditButton>
      </RightWrapper>
    </Wrapper>
  );
};

export default ExpenseListItem;
const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightWrapper = styled.div`
  width: 385px;
  display: flex;
  justify-content: space-between;
  align-items: left;
`;
const WrapperSecondary = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const WrapperSecondary2 = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #18191f;
  background: rgba(24, 25, 31, 0.03);
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 18px 12px 18px 12px;
  width: 770px;
  height: 56px;
  font-family: 'Roboto';
`;

const Date = styled.p`
  color: #18191f;
  margin-right: 50px;
`;

const ExpenseName = styled.p`
  color: #7c9af2;
`;

const Value = styled.p`
  margin-right: 34px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const Category = styled.p``;

const EditButton = styled.div`
  background-color: transparent;
  width: 20px;

  height: 20px;
  display: flex;
  align-self: flex-end;
`;
