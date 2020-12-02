import styled from 'styled-components';
import { size } from '../../common/deviceSizes';
import { background, colors } from '../../stylesheet/vars';

export const ForecastExpenseWrapper = styled.div`
  padding: 34px 40px;
  border-radius: 8px;
  background: ${background.secondary};
  color: #ffffff;
  .inner {
    margin-bottom: 18px;
  }
  .value {
    padding: 18px 12px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
  }
  .small {
    margin: 5px 10px 0;
    color: rgba(255, 255, 255, 0.36);
    font-size: 12px;
  }
  .btn {
    height: auto;
    width: 100%;
    padding: 18px;
    border: none;
    background: ${colors.main};
    border-radius: inherit;
    color: inherit;
  }

  @media (min-width: ${size.tablet}) {
    padding: 32px 25px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .inner,
    .btn {
      margin: 0;
      width: 30%;
    }
  }
  @media (min-width: ${size.desktop}) {
    padding: 32px 65px;
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px;
  background-color: #ffffff;
`;
