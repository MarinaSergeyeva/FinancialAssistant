import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { size } from '../../common/deviceSizes';
import { textColor, colors } from '../../stylesheet/vars';
import useReduxState from '../../hooks/useReduxState';

const YEARS_CASES = ['год', 'года', 'лет'];
const MONTHS_CASES = ['месяц', 'месяца', 'месяцев'];

const ProgressInfo = () => {
  const { stats } = useReduxState();
  const {
    savingsPercentage,
    savingsValue,
    savingsInSquareMeters,
    totalSquareMeters,
    monthsLeftToSaveForFlat,
  } = stats.statsFlat;
  const years = Math.abs(Math.floor(monthsLeftToSaveForFlat / 12));
  const months = Math.abs(monthsLeftToSaveForFlat % 12);
  const progressLength = (savingsInSquareMeters / totalSquareMeters) * 100;
  return (
    <>
      <TotalInfo>
        Через{' '}
        <strong>
          {`${years} ${genitive(years, YEARS_CASES)} ${months} ${genitive(
            months,
            MONTHS_CASES,
          )}`}
        </strong>
      </TotalInfo>
      <Table>
        <tbody>
          <tr>
            <td className="left">Накоплено, %:</td>
            <td className="right">{Math.round(savingsPercentage * 100)} %</td>
          </tr>
          <tr>
            <td className="left">Накоплено, грн:</td>
            <td className="right">
              {new Intl.NumberFormat('ua-UA').format(savingsValue)} &#x20B4;
            </td>
          </tr>
          <tr>
            <td className="left">А это:</td>
            <td className="right">{savingsInSquareMeters} кв. м</td>
          </tr>
        </tbody>
      </Table>

      <AccumulatedMeters>
        <span>{savingsInSquareMeters}</span> из{' '}
        <span>{totalSquareMeters} кв.м</span> накоплено
      </AccumulatedMeters>

      <ProgressBar>
        <div className="progress" style={{ width: progressLength + '%' }} />
      </ProgressBar>
    </>
  );
};

export default ProgressInfo;

const TotalInfo = styled.p`
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(24, 25, 31, 0.54);
  strong {
    font-weight: 700;
    color: ${textColor.main};
  }
  @media (min-width: ${size.tablet}) {
    margin-bottom: 60px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: ${size.tablet}) {
    margin-bottom: 40px;
  }

  .left {
    padding: 5px 0;
    font-size: 14px;
    color: rgba(24, 25, 31, 0.54);
  }

  .right {
    padding: 5px 0;
    font-size: 14px;
    text-align: right;
    color: ${textColor.main};
  }
`;

const AccumulatedMeters = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  color: rgba(24, 25, 31, 0.54);
  font-weight: 400;

  span {
    color: ${textColor.main};
  }
`;

const ProgressBar = styled.div`
  height: 5px;
  border-radius: 10px;
  background: ${colors.third};

  .progress {
    max-width: 100% !important;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(90deg, #fad961 17.16%, #ff6c00 103.41%);
  }
`;

function genitive(number, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
