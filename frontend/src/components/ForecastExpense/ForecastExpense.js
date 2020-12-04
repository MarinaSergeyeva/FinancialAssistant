import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import useIndicators from './hooks/useIndicators';
import useReduxState from '../../hooks/useReduxState';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import { transactionOperations, userOperations } from '../../redux/operations';
import { ForecastExpenseWrapper, Message } from './forecastExpenseStyled';

const ForecastExpense = ({ setTransactionStatus }) => {
  const dispatch = useDispatch();
  const { dailyLimit, monthLimit } = useIndicators();
  const [isShowModal, setIsShowModal] = useHandleBoolChange(false);
  const [message, setMessage] = useState('');
  const { userTransactions } = useReduxState();
  const { transaction } = userTransactions;

  const handleClick = async () => {
    const { amount, category, comment } = transaction;

    if (amount) {
      const transactionAmount = Math.abs(Number(amount.toFixed(2)));
      const newTransaction = {
        amount: transactionAmount,
        category,
        comment,
        transactionDate: Date.now(),
        type: 'EXPENSE',
      };
      await dispatch(transactionOperations.createTransaction(newTransaction));
      await dispatch(userOperations.getCurrentUser());
      setTransactionStatus(true);
      setMessage('Ваши данные по расходам сохранены!');
    } else {
      setMessage('Введите сумму транзакции больше нуля');
    }
    setIsShowModal();
  };

  const closeForm = () => {
    setIsShowModal();
  };

  return (
    <>
      <ForecastExpenseWrapper>
        <div className="inner">
          <p className="value">{dailyLimit} &#x20B4;</p>
          <p className="small">Лимит на день</p>
        </div>
        <div className="inner">
          <p className="value">{monthLimit > 0 ? 0 : monthLimit} &#x20B4;</p>
          <p className="small">Отклонение от плановой суммы накопления</p>
        </div>
        <button className="btn orange-btn" onClick={handleClick} type="button">
          Готово
        </button>
      </ForecastExpenseWrapper>
      {isShowModal && (
        <Modal closeModal={closeForm}>
          <Message>{message}</Message>
        </Modal>
      )}
    </>
  );
};

export default ForecastExpense;
