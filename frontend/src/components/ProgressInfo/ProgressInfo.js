import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import useRestTime from './hooks/useRestTime';
import {
  TotalInfo,
  Table,
  AccumulatedMeters,
  ProgressBar,
} from './progressInfoStyled';

const ProgressInfo = () => {
  const { stats } = useReduxState();
  const {
    savingsPercentage,
    savingsValue,
    savingsInSquareMeters,
    totalSquareMeters,
  } = stats.statsFlat;
  const restTimeInWords = useRestTime();
  const progressLength = (savingsInSquareMeters / totalSquareMeters) * 100;
  return (
    <>
      <TotalInfo>
        Через <strong>{restTimeInWords}</strong>
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
