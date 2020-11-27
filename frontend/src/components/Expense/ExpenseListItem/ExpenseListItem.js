import React from 'react';
import styled from 'styled-components';
import otherImg from '../../../assets/images/expenseListItem/other.svg';
import editImg from '../../../assets/images/expenseListItem/edit.svg';
import device, { Desktop, Mobile, Tablet } from '../../../common/deviceSizes';

const ExpenseListItem = ({ expense }) => {
  return (
    <>
      {expense && (
        <>
          <Mobile>
            <Wrapper>
              <WrapperSecondary>
                <ExpenseName>{expense.comment}</ExpenseName>
                <EditButton>
                  <img width="20" height="20" alt="other" src={editImg} />
                </EditButton>
              </WrapperSecondary>
              <WrapperSecondary>
                <Value>{expense.amount} грн</Value>
                <CategoryWrapper>
                  <IconWrapper>
                    <img width="20" height="20" alt="other" src={otherImg} />
                  </IconWrapper>
                  <Category>{expense.Category}</Category>
                </CategoryWrapper>
              </WrapperSecondary>
              <Date>19.12.2019</Date>
            </Wrapper>
          </Mobile>
          <Tablet>
            <Wrapper>
              <WrapperSecondary>
                <ExpenseName>{expense.comment}</ExpenseName>
                <EditButton>
                  <img width="20" height="20" alt="other" src={editImg} />
                </EditButton>
              </WrapperSecondary>
              <WrapperSecondary>
                <Value>{expense.amount} грн</Value>
                <CategoryWrapper>
                  <IconWrapper>
                    <img width="20" height="20" alt="other" src={otherImg} />
                  </IconWrapper>
                  <Category>{expense.Category}</Category>
                </CategoryWrapper>
              </WrapperSecondary>
              <Date>19.12.2019</Date>
            </Wrapper>
          </Tablet>
          <Desktop>
            <Wrapper>
              <LeftWrapper>
                <Date>19.12.2019</Date>
                <ExpenseName>{expense.comment}</ExpenseName>
              </LeftWrapper>
              <RightWrapper>
                <WrapperSecondary2>
                  <Value>{expense.amount} грн</Value>
                  <WrapperSecondary>
                    <CategoryWrapper>
                      <IconWrapper>
                        <img
                          width="20"
                          height="20"
                          alt="other"
                          src={otherImg}
                        />
                      </IconWrapper>
                      <Category>{expense.Category}</Category>
                    </CategoryWrapper>
                  </WrapperSecondary>
                </WrapperSecondary2>
                <EditButton>
                  <img width="20" height="20" alt="other" src={editImg} />
                </EditButton>
              </RightWrapper>
            </Wrapper>
          </Desktop>
        </>
      )}
    </>
  );
};

export default ExpenseListItem;
const LeftWrapper = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
const RightWrapper = styled.div`
  @media ${device.desktop} {
    width: 385px;
    display: flex;
    justify-content: space-between;
    align-items: left;
  }
`;
const WrapperSecondary = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media ${device.desktop} {
    margin-bottom: 0px;
  }
`;
const WrapperSecondary2 = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 280px;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  background: rgba(24, 25, 31, 0.03);
  border-radius: 4px;
  @media ${device.mobile} {
    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media ${device.tablet} {
    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
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

const Date = styled.p`
  text-align: right;
  @media ${device.desktop} {
    color: #18191f;
    margin-right: 50px;
  }
`;

const ExpenseName = styled.p`
  /* margin-bottom: 20px; */
  color: #7c9af2;
  @media ${device.desktop} {
    /* margin-bottom: 0px; */
  }
`;

const Value = styled.p`
  @media ${device.desktop} {
    margin-right: 34px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  @media ${device.desktop} {
    justify-content: space-between;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  @media ${device.desktop} {
  }
`;

const Category = styled.p``;

const EditButton = styled.div`
  @media ${device.desktop} {
    background-color: transparent;
    width: 20px;

    height: 20px;
    display: flex;
    align-self: flex-end;
  }
`;
