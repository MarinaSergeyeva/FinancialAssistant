import styled from 'styled-components';
import device from '../../common/deviceSizes';

// padding: 34px 20px 0px;
export const PlanFormStyled = styled.div`
  form,
  label {
    display: flex;
    flex-direction: column;
  }

  label {
    position: relative;
    color: rgb(24, 25, 31, 0.54);
  }

  label:not(:last-of-type) {
    @media ${device.mobile} {
      margin-bottom: 35px;
    }
    @media ${device.tablet} {
      margin-bottom: 50px;
    }
    @media ${device.desktop} {
      margin-bottom: 50px;
    }
  }

  /* label:not(:last-of-type) {
    margin-bottom: 35px;
  } */
  /* label:last-of-type {
    margin-bottom: 109px;
  } */

  .formContainer {
    @media ${device.mobile} {
      width: 280px;
    }
    @media ${device.tablet} {
      display: flex;
    }
    @media ${device.desktop} {
      display: flex;
    }
  }

  .leftFormContainer {
    @media ${device.tablet} {
      width: 330px;
      margin-right: 30px;
    }

    @media ${device.desktop} {
      width: 370px;
      margin-right: 30px;
    }
  }

  .rightFormContainer {
    @media ${device.tablet} {
      width: 330px;
    }

    @media ${device.desktop} {
      width: 370px;
    }
  }

  span {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 12px;
    line-height: 14px;
  }
  p {
    position: absolute;
    bottom: -16px;
    left: 12px;
    font-size: 12px;
    line-height: 14px;
  }

  label:hover,
  label:focus {
    color: rgb(33, 150, 243);
  }

  input,
  select {
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
