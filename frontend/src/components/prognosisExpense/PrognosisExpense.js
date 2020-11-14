import React from 'react';
import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

const PrognosisExpenseWrapper = styled.div`
  padding: 34px 40px;
  border-radius: 8px;
  background: var(--secondary-background-color);
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
    background: var(--main-color);
    border-radius: inherit;
    color: inherit;
  }
  @media (min-width: ${size.tablet}) {
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

const PrognosisExpense = () => {
  const handleClick = () => {
    console.log('Отправка запроса - транзакция по расходам');
  };
  return (
    <PrognosisExpenseWrapper>
      <div className="inner">
        <p className="value">-600 &#x20B4;</p>
        <p className="small">Лимит на день</p>
      </div>

      <div className="inner">
        <p className="value">-5000 &#x20B4;</p>
        <p className="small">Отклонение от плановой суммы накопления</p>
      </div>

      <button className="btn" onClick={handleClick} type="button">
        Готово
      </button>
    </PrognosisExpenseWrapper>
  );
};

export default PrognosisExpense;
