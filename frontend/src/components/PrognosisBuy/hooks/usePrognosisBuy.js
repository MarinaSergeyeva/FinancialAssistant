import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operation from '../../../redux/operations/userInfoOperation';

export const usePrognosisBuy = fields => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const infoCurrentUser = useSelector(state => state.user.info);

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
      infoCurrentUser.totalSalary &&
      infoCurrentUser.passiveIncome &&
      infoCurrentUser.balance &&
      infoCurrentUser.flatPrice &&
      infoCurrentUser.flatSquareMeters &&
      infoCurrentUser.incomePercentageToSavings &&
      infoCurrentUser.balance <= infoCurrentUser.flatPrice
    ) {
      const incomeToSavings =
        ((Number(infoCurrentUser.totalSalary) +
          Number(infoCurrentUser.passiveIncome)) *
          Number(infoCurrentUser.incomePercentageToSavings)) /
        100;
      const requiredAmount =
        Number(infoCurrentUser.flatPrice) - Number(infoCurrentUser.balance);
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
