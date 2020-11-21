import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { size } from '../../common/deviceSizes';
import { background, colors } from '../../stylesheet/vars';
import { userSelectors, transactionSelectors } from '../../redux/selectors';
import { userOperations } from '../../redux/operations';

const ForecastExpense = () => {
  const transaction = useSelector(state =>
    transactionSelectors.getTransaction(state),
  );
  const userData = useSelector(state => userSelectors.getCurrentUser(state));
  const { balance, incomePercentageToSavings } = userData;
  const freeMoney = balance * (1 - incomePercentageToSavings / 100);
  const todayDate = new Date();
  const restDays =
    daysInMonth(todayDate.getMonth(), todayDate.getFullYear()) -
    todayDate.getDate() +
    1;
  const dailyLimit = (
    freeMoney / restDays -
    Number(transaction.amount)
  ).toFixed(2);
  const monthLimit = (freeMoney - Number(transaction.amount)).toFixed(2);

  const dispatch = useDispatch();
  const handleClick = async () => {
    if (transaction.amount) {
      const newTransaction = {
        ...transaction,
        transactionDate: Date.now(),
        type: 'EXPENSE',
      };
      console.log('newTransaction', newTransaction);
      await dispatch(userOperations.createTransaction(newTransaction));
      console.log('Запрос на бэк выполнен');
    } else {
      console.log('Введите сумму транзакции');
    }
  };
  return (
    <ForecastExpenseWrapper>
      <div className="inner">
        <p className="value">{dailyLimit} &#x20B4;</p>
        <p className="small">Лимит на день</p>
      </div>

      <div className="inner">
        <p className="value">{monthLimit > 0 ? 0 : monthLimit} &#x20B4;</p>
        <p className="small">Отклонение от плановой суммы накопления</p>
      </div>

      <button className="btn" onClick={handleClick} type="button">
        Готово
      </button>
    </ForecastExpenseWrapper>
  );
};

export default ForecastExpense;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const ForecastExpenseWrapper = styled.div`
  padding: 34px 40px;
  border-radius: 8px;
  background: ${background.secondary}; // var(--secondary-background-color);
  color: #ffffff;
  .inner {
    margin-bottom: 18px;
  }
  .value {
    padding: 18px 12px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
  }
  .small {
    margin: 5px 10px 0;
    color: rgba(255, 255, 255, 0.36);
    font-size: 12px;
  }
  .btn {
    height: auto;
    width: 100%;
    padding: 18px;
    border: none;
    background: ${colors.main}; // var(--main-color);
    border-radius: inherit;
    color: inherit;
  }
  @media (min-width: ${size.tablet}) {
    padding: 32px 25px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .inner,
    .btn {
      margin: 0;
      width: 30%;
    }
  }
  @media (min-width: ${size.desktop}) {
    padding: 32px 65px;
  }
`;
