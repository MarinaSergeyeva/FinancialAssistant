import styled from 'styled-components';
import { device } from '../../../common/deviceSizes';

export const Button = styled.button`
  background-color: #7c9af2;
  height: 30px;
  border: 0;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s linear;
  :hover {
    background-color: #ff6c00;
  }
`;

export const Select = styled.select`
  width: 80px;
`;

export const Label = styled.label`
  display: flex;
`;

export const Form = styled.form`
  padding: 15px;
  margin: 0 auto;
  width: 280px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  background: rgba(24, 25, 31, 0.03);
  border-radius: 4px;

  @media ${device.mobile} {
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid #18191f;

    align-items: center;
    display: flex;
    justify-content: space-between;

    width: 770px;
    height: 56px;
  }
`;

export const Input = styled.input`
  width: 100px;
  margin-right: 25px;
  margin-left: 10px;
  padding-left: 6px;
`;
export const LeftWrapper = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
export const RightWrapper = styled.div`
  @media ${device.desktop} {
    width: 385px;
    display: flex;
    justify-content: space-between;
    align-items: left;
  }
`;
export const WrapperSecondary = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media ${device.desktop} {
    margin-bottom: 0px;
  }
`;
export const WrapperSecondary2 = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 280px;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  background: rgba(24, 25, 31, 0.03);
  border-radius: 4px;
  @media ${device.mobile} {
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  @media ${device.tablet} {
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  @media ${device.desktop} {
    border-bottom: 1px solid #18191f;
    box-shadow: 0px;
    align-items: center;

    display: flex;
    justify-content: space-between;
    padding: 18px 12px 18px 12px;
    width: 770px;
    height: 56px;
  }
`;

export const Date = styled.p`
  text-align: right;
  @media ${device.desktop} {
    color: #18191f;
    margin-right: 50px;
  }
`;

export const ExpenseName = styled.p`
  color: #7c9af2;
  @media ${device.desktop} {
  }
`;

export const Value = styled.p`
  @media ${device.desktop} {
    margin-right: 34px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  @media ${device.desktop} {
    justify-content: space-between;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  @media ${device.desktop} {
  }
`;

export const Category = styled.p``;

export const EditButton = styled.div`
  @media ${device.desktop} {
    background-color: transparent;
    width: 20px;
    cursor: pointer;
    height: 20px;
    display: flex;
    align-self: flex-end;
  }
`;
