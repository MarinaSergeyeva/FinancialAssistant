import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../../redux/operations/userInfoOperation';
import useReduxState from '../../../hooks/useReduxState';

export const usePrognosisBuy = fields => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const { userInfo } = useReduxState();

  const getResult = () => {
    if (
      fields.totalSalary &&
      fields.passiveIncome &&
      fields.balance &&
      fields.flatPrice &&
      fields.flatSquareMeters &&
      fields.incomePercentageToSavings &&
      fields.balance <= fields.flatPrice
    ) {
      const incomeToSavings =
        ((Number(fields.totalSalary) + Number(fields.passiveIncome)) *
          Number(fields.incomePercentageToSavings)) /
        100;
      const requiredAmount = Number(fields.flatPrice) - Number(fields.balance);
      const yearsResult = Math.floor(requiredAmount / incomeToSavings / 12);
      const monthsResult = Math.ceil(
        requiredAmount / incomeToSavings - yearsResult * 12,
      );

      setYears(yearsResult);
      setMonths(monthsResult);
    } else {
      setYears(0);
      setMonths(0);
    }
  };

  const getResultBD = () => {
    if (
      userInfo.totalSalary &&
      userInfo.passiveIncome &&
      userInfo.balance &&
      userInfo.flatPrice &&
      userInfo.flatSquareMeters &&
      userInfo.incomePercentageToSavings &&
      userInfo.balance <= userInfo.flatPrice
    ) {
      const incomeToSavings =
        ((Number(userInfo.totalSalary) + Number(userInfo.passiveIncome)) *
          Number(userInfo.incomePercentageToSavings)) /
        100;
      const requiredAmount =
        Number(userInfo.flatPrice) - Number(userInfo.balance);
      const yearsResult = Math.floor(requiredAmount / incomeToSavings / 12);
      const monthsResult = Math.ceil(
        requiredAmount / incomeToSavings - yearsResult * 12,
      );
      setYears(yearsResult);
      setMonths(monthsResult);
    } else {
      setYears(0);
      setMonths(0);
    }
  };

  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }

  useEffect(() => {
    if (userInfo.flatPrice) {
      getResultBD();
    } else {
      getResult();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  const dispatch = useDispatch();

  const onHandleSubmit = async e => {
    e.preventDefault();
    if (userInfo.flatPrice > 0) {
      setMessage('Ваши данные уже были сохранены!');
    } else if (fields.balance > fields.flatPrice) {
      setMessage(
        'У Вас достаточно сбережений, чтобы купить квартиру прямо сейчас',
      );
    } else if (years > 0 || months > 0) {
      await dispatch(operation.updateUserInfo(fields));
      setMessage('Ваши данные сохранены!');
    } else {
      setMessage('*все поля должны быть заполнены');
    }
    setIsShowModal(true);
  };

  const closeForm = () => {
    setIsShowModal(prev => !prev);
  };

  return {
    valuePrognosisBuy: { years, months, isShowModal, message },
    methodPrognosisBuy: { onHandleSubmit, declOfNum, closeForm },
  };
};
