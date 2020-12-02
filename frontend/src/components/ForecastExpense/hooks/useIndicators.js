// import React from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useIndicators = () => {
  const { userInfo, userTransactions } = useReduxState();
  const { monthBalance, incomePercentageToSavings } = userInfo;
  const { transaction } = userTransactions;
  const freeMoney = monthBalance * (1 - incomePercentageToSavings / 100);
  const today = new Date();
  const allMonthDays = daysInMonth(today.getMonth(), today.getFullYear());
  const restDays = allMonthDays - today.getDate() + 1;
  const dailyLimit = (
    freeMoney / restDays -
    Number(transaction.amount)
  ).toFixed(2);
  const monthLimit = (freeMoney - Number(transaction.amount)).toFixed(2);
  return { dailyLimit, monthLimit };
};

export default useIndicators;

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
