import useReduxState from '../../../hooks/useReduxState';

const YEARS_CASES = ['год', 'года', 'лет'];
const MONTHS_CASES = ['месяц', 'месяца', 'месяцев'];

const useRestTime = () => {
  const { stats } = useReduxState();
  const { monthsLeftToSaveForFlat } = stats.statsFlat;
  const years = Math.abs(Math.floor(monthsLeftToSaveForFlat / 12));
  const months = Math.abs(monthsLeftToSaveForFlat % 12);
  const restTimeInWords = `${years} ${declension(
    years,
    YEARS_CASES,
  )} ${months} ${declension(months, MONTHS_CASES)}`;
  return restTimeInWords;
};

export default useRestTime;

function declension(number, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
