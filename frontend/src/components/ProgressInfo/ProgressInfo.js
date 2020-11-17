import React from 'react';
import styled from 'styled-components';
import { size } from '../../common/deviceSizes';
import { textColor, colors } from '../../stylesheet/vars';

const ProgressInfo = () => {
  return (
    <>
      <TotalInfo>
        Через <strong>4 года 1 месяц</strong>
      </TotalInfo>
      <Table>
        <tbody>
          <tr>
            <td className="left">Накоплено, %:</td>
            <td className="right">28 %</td>
          </tr>
          <tr>
            <td className="left">Накоплено, грн:</td>
            <td className="right">60 000 &#x20B4;</td>
          </tr>
          <tr>
            <td className="left">А это:</td>
            <td className="right">2 кв. м</td>
          </tr>
        </tbody>
      </Table>

      <AccumulatedMeters>
        <span>22</span> из <span>60 кв.м</span> накоплено
      </AccumulatedMeters>

      <ProgressBar>
        <div className="progress" style={{ width: '28%' }} />
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
