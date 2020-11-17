import React from 'react';
import styled from 'styled-components';
// import ExpenseForm from '../../components/expenseForm/ExpenseForm';
import PrognosisExpense from '../../components/PrognosisExpense/PrognosisExpense';
import { size } from '../../common/deviceSizes';

const ExpensePage = () => {
  {
    return (
      <ExpensePageContainer>
        <ExpenseFormWrapper>
          <p style={{ textAlign: 'center' }}>
            <br />
            Место для формы расходов
            <br />
          </p>
          {/* <ExpenseForm /> */}
        </ExpenseFormWrapper>
        <PrognosisExpense />
      </ExpensePageContainer>
    );
  }
};

export default ExpensePage;

const ExpensePageContainer = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 200px;
  width: 280px;
  @media (min-width: ${size.tablet}) {
    padding-top: 74px;
    padding-bottom: 510px;
    width: 690px;
  }
  @media (min-width: ${size.desktop}) {
    padding-top: 64px;
    padding-bottom: 220px;
    width: 770px;
  }
`;

const ExpenseFormWrapper = styled.div`
  margin-bottom: 53px;
`;
