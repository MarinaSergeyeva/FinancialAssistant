import React from 'react';
import styled from 'styled-components';
import { size } from '../../common/deviceSizes';

const ProgressInfo = () => {
  const { finance } = this.props;
  const years = Math.floor(finance?.monthsLeftToSaveForFlat / 12);
  const months = finance?.monthsLeftToSaveForFlat % 12;
  const width =
    (finance?.savingsInSquareMeters / finance?.totalSquareMeters) * 100;

  return (
    <>
      <p className={styles.total}>
        Через{' '}
        <strong>{`${years} ${declOfNum(
          years,
          YEARS_TITLE,
        )} ${months} ${declOfNum(months, MONTHS_TITLE)}`}</strong>
      </p>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.left}>Накоплено, %:</td>
            <td className={styles.right}>{finance?.savingsPercentage} %</td>
          </tr>
          <tr>
            <td className={styles.left}>Накоплено, грн:</td>
            <td className={styles.right}>{finance?.savingsValue} &#x20B4;</td>
          </tr>
          <tr>
            <td className={styles.left}>А это:</td>
            <td className={styles.right}>
              {finance?.savingsInSquareMeters} кв. м
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.meters}>
        <span>{finance?.savingsInSquareMeters}</span> из{' '}
        <span>{finance?.totalSquareMeters} кв.м</span> накоплено
      </p>

      <div className={styles.line}>
        <div className={styles.progress} style={{ width: width + '%' }} />
      </div>
    </>
  );
};

export default ProgressInfo;
