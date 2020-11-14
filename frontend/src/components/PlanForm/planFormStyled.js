import styled from 'styled-components';
import device from '../../common/deviceSizes';

export const PlanFormStyled = styled.div`
  padding: 34px 20px 0px;

  form,
  label {
    display: flex;
    flex-direction: column;
  }
  label {
    position: relative;
    width: 280px;
    color: rgb(24, 25, 31, 0.54);
  }

  label:not(:last-of-type) {
    margin-bottom: 35px;
  }
  label:last-of-type {
    margin-bottom: 109px;
  }

  span {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 12px;
    line-height: 14px;
  }

  label:hover,
  label:focus {
    color: rgb(33, 150, 243);
  }

  input {
    background: rgba(0, 0, 0, 0.03);
    padding: 24px 12px 12px;
    color: rgba(24, 25, 31, 0.87);
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-bottom: 1px solid rgba(24, 25, 31, 0.36);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .accumulation {
    position: absolute;
    top: 60px;
    color: rgba(24, 25, 31, 0.54);
    font-size: 12px;
    line-height: 14px;
  }

  input:hover,
  input:focus {
    border-bottom: 1px solid rgb(33, 150, 243);
  }

  @media ${device.tablet} {
    color: red;
  }
`;

/* Rectangle */
