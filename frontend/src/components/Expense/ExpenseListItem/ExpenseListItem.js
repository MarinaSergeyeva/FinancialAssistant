import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import otherImg from '../../../assets/images/expenseListItem/other.svg';
import editImg from '../../../assets/images/expenseListItem/edit.svg';
import foodImg from '../../../assets/images/expenseListItem/food.svg';
import homeImg from '../../../assets/images/expenseListItem/home.svg';
import transportImg from '../../../assets/images/expenseListItem/taxi.svg';
import productsImg from '../../../assets/images/expenseListItem/products.svg';
import entertainmentImg from '../../../assets/images/expenseListItem/entertainment.svg';
import device, { Desktop, Mobile, Tablet } from '../../../common/deviceSizes';
import { useInput } from '../../ExpenseForm/ExpenseForm';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../../redux/operations/transactionOperations';
import categoriesSelector from '../../../redux/selectors/categoriesSelector';
import categoriesOperations from '../../../redux/operations/categoriesOperations';

const ExpenseListItem = ({ expense, date }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => categoriesSelector(state));

  // const categories = [
  //   'Другое',
  //   'Развлечения',
  //   'Продукты',
  //   'Товары',
  //   'Транспорт',
  //   'ЖКХ',
  // ];

  const [img, setImg] = useState();
  useEffect(() => {
    dispatch(categoriesOperations.getCategories());

    if (expense.category === 'ЖКХ') {
      return setImg(homeImg);
    } else if (expense.category === 'Другое') {
      return setImg(otherImg);
    } else if (expense.category === 'Развлечения') {
      return setImg(entertainmentImg);
    } else if (expense.category === 'Продукты') {
      return setImg(foodImg);
    } else if (expense.category === 'Товары') {
      return setImg(productsImg);
    } else if (expense.category === 'Транспорт') {
      return setImg(transportImg);
    }
    // eslint-disable-next-line
  }, [img]);

  const [showInput, setShowInput] = useState(false);

  const openEdit = () => {
    setShowInput(true);
  };

  const closeEdit = () => {
    setShowInput(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // const date = new Date(expense.transactionDate);
    // console.log(date);
    dispatch(
      await transactionOperations.updateTransactionExpense(
        updatedExpense,
        expense._id,
      ),
    );
    closeEdit();
  };

  const amount = useInput(expense.amount);
  const comment = useInput(expense.comment);
  const category = useInput(expense.category);

  const updatedExpense = {
    amount: Number(amount.bind.value),
    comment: comment.bind.value,
    category: category.bind.value,
    _id: expense._id,
  };

  return (
    <>
      {expense && (
        <>
          <Mobile>
            {showInput ? (
              <Form onSubmit={handleSubmit}>
                <Label>
                  Название: <Input type="text" {...comment.bind} />
                </Label>
                <Label>
                  Сумма:
                  <Input type="number" {...amount.bind} />
                </Label>
                <Label>
                  Категория:
                  <Select type="text" {...category.bind}>
                    <option
                      key="Без категории"
                      value="Без категории"
                      defaultValue
                    >
                      -- Выберите категорию --
                    </option>
                    {categories.map(elem => (
                      <option value={elem} key={elem}>
                        {elem}
                      </option>
                    ))}
                  </Select>
                </Label>
                <Date>19.12.2019</Date>
                <Button>Сохранить</Button>
              </Form>
            ) : (
              <Wrapper>
                <WrapperSecondary>
                  <ExpenseName>{expense.comment}</ExpenseName>
                  <EditButton onClick={openEdit}>
                    <img width="20" height="20" alt="other" src={editImg} />
                  </EditButton>
                </WrapperSecondary>
                <WrapperSecondary>
                  <Value>{expense.amount} грн</Value>
                  <CategoryWrapper>
                    <IconWrapper>
                      <img
                        width="20"
                        height="20"
                        alt={expense.category}
                        src={img}
                      />
                    </IconWrapper>
                    <Category>{expense.category}</Category>
                  </CategoryWrapper>
                </WrapperSecondary>
                <Date>{date}</Date>
              </Wrapper>
            )}
          </Mobile>
          <Tablet>
            {showInput ? (
              <Form onSubmit={handleSubmit}>
                <Label>
                  Название: <Input type="text" {...comment.bind} />
                </Label>
                <Label>
                  Сумма:
                  <Input type="number" {...amount.bind} />
                </Label>
                <Label>
                  Категория:
                  <Select type="text" {...category.bind}>
                    <option
                      key="Без категории"
                      value="Без категории"
                      defaultValue
                    >
                      -- Выберите категорию --
                    </option>
                    {categories.map(elem => (
                      <option value={elem} key={elem}>
                        {elem}
                      </option>
                    ))}
                  </Select>
                </Label>
                <Date>19.12.2019</Date>
                <Button>Сохранить</Button>
              </Form>
            ) : (
              <Wrapper>
                <WrapperSecondary>
                  <ExpenseName>{expense.comment}</ExpenseName>
                  <EditButton onClick={openEdit}>
                    <img width="20" height="20" alt="other" src={editImg} />
                  </EditButton>
                </WrapperSecondary>
                <WrapperSecondary>
                  <Value>{expense.amount} грн</Value>
                  <CategoryWrapper>
                    <IconWrapper>
                      <img
                        width="20"
                        height="20"
                        alt={expense.category}
                        src={img}
                      />
                    </IconWrapper>
                    <Category>{expense.category}</Category>
                  </CategoryWrapper>
                </WrapperSecondary>
                <Date>{date}</Date>
              </Wrapper>
            )}
          </Tablet>
          <Desktop>
            {showInput ? (
              <Form _id={expense._id} onSubmit={handleSubmit}>
                <LeftWrapper>
                  <Date>19.12.2019</Date>
                  <Label>
                    Название: <Input type="text" {...comment.bind} />
                  </Label>
                </LeftWrapper>
                <RightWrapper>
                  <WrapperSecondary2>
                    <Label>
                      Сумма:
                      <Input type="number" {...amount.bind} />
                    </Label>
                    <WrapperSecondary>
                      <CategoryWrapper>
                        <label>
                          <Select type="text" {...category.bind}>
                            <option
                              key="Без категории"
                              value="Без категории"
                              defaultValue
                            >
                              -- Выберите категорию --
                            </option>
                            {categories.map(elem => (
                              <option value={elem} key={elem}>
                                {elem}
                              </option>
                            ))}
                          </Select>
                        </label>
                      </CategoryWrapper>
                    </WrapperSecondary>
                  </WrapperSecondary2>
                  <Button>Сохранить</Button>
                </RightWrapper>
              </Form>
            ) : (
              <Wrapper>
                <LeftWrapper>
                  <Date>{date}</Date>
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
                            alt={expense.category}
                            src={img}
                          />
                        </IconWrapper>
                        <Category>{expense.category}</Category>
                      </CategoryWrapper>
                    </WrapperSecondary>
                  </WrapperSecondary2>
                  <EditButton onClick={openEdit}>
                    <img width="20" height="20" alt="other" src={editImg} />
                  </EditButton>
                </RightWrapper>
              </Wrapper>
            )}
          </Desktop>
        </>
      )}
    </>
  );
};

export default ExpenseListItem;

const Button = styled.button`
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

const Select = styled.select`
  width: 80px;
`;

const Label = styled.label`
  display: flex;
`;

const Form = styled.form`
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

const Input = styled.input`
  width: 100px;
  margin-right: 25px;
  margin-left: 10px;
  padding-left: 6px;
`;
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
    cursor: pointer;
    height: 20px;
    display: flex;
    align-self: flex-end;
  }
`;
