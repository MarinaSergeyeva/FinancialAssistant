import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operation from '../../redux/operations/userInfoOperation';
import Modal from '../Modal/Modal';
import decor from '../../assets/images/planPage/decor.svg';
import { PrognosisBuyStyled, MessageStyled } from './prognosisBuyStyled';

function PrognosisBuy({ fields }) {
  const [years, setYears] = useState(0);
  const [monthes, setMonthes] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const infoCurrentUser = useSelector(state => state.user.info);

  const getResult = () => {
    if (
      fields.totalSalary &&
      fields.passiveIncome &&
      fields.balance &&
      fields.flatPrice &&
      fields.incomePercentageToSavings &&
      fields.balance <= fields.flatPrice
    ) {
      const incomeToSavings =
        ((Number(fields.totalSalary) + Number(fields.passiveIncome)) *
          Number(fields.incomePercentageToSavings)) /
        100;
      const requiredAmount = Number(fields.flatPrice) - Number(fields.balance);
      const yearsResult = Math.floor(requiredAmount / incomeToSavings / 12);
      const monthesResult = Math.ceil(
        requiredAmount / incomeToSavings - yearsResult * 12,
      );

      setYears(yearsResult);
      setMonthes(monthesResult);
    } else {
      setYears(0);
      setMonthes(0);
    }
  };

  const getResultBD = () => {
    const incomeToSavings =
      ((Number(infoCurrentUser.totalSalary) +
        Number(infoCurrentUser.passiveIncome)) *
        Number(infoCurrentUser.incomePercentageToSavings)) /
      100;
    const requiredAmount =
      Number(infoCurrentUser.flatPrice) - Number(infoCurrentUser.balance);
    const yearsResult = Math.floor(requiredAmount / incomeToSavings / 12);
    const monthesResult = Math.ceil(
      requiredAmount / incomeToSavings - yearsResult * 12,
    );
    setYears(yearsResult);
    setMonthes(monthesResult);
  };

  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }

  useEffect(() => {
    if (infoCurrentUser.flatPrice) {
      getResultBD();
    } else {
      getResult();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  const dispatch = useDispatch();

  const onHandleSubmit = async e => {
    e.preventDefault();
    if (infoCurrentUser.flatPrice > 0) {
      setMessage('Ваши данные уже были сохранены!');
    } else {
      monthes && (await dispatch(operation.updateUserInfo(fields)));
      setMessage('Ваши данные сохранены!');
    }
    setIsShowModal(true);
  };

  const closeForm = () => {
    setIsShowModal(prev => !prev);
  };

  return (
    <>
      <PrognosisBuyStyled>
        <div className="wrapper">
          <h2>У вас будет квартира через:</h2>
          <form onSubmit={onHandleSubmit}>
            <label>
              <input
                type="text"
                name="years"
                value={
                  !years
                    ? ''
                    : years + ' ' + declOfNum(years, ['год', 'года', 'лет'])
                }
                onChange={() => {}}
                placeholder="0 лет"
              />
              <span>Кол-во лет</span>
            </label>
            <label>
              <input
                type="text"
                name="monthes"
                value={
                  !monthes
                    ? ''
                    : monthes +
                      ' ' +
                      declOfNum(monthes, ['месяц', 'месяца', 'месяцев'])
                }
                onChange={() => {}}
                placeholder="0 месяцев"
              />
              <span>Кол-во месяцев</span>
            </label>
            <button type="submit">Подходит</button>
          </form>
        </div>
        <img src={decor} alt="элемент декора" />
      </PrognosisBuyStyled>
      {isShowModal && (
        <Modal closeModal={closeForm}>
          <MessageStyled>{message}</MessageStyled>
        </Modal>
      )}
    </>
  );
}

export default PrognosisBuy;
