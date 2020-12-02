import React, { useEffect, useState } from 'react';
import otherImg from '../../../assets/images/expenseListItem/other.svg';
import editImg from '../../../assets/images/expenseListItem/edit.svg';
import foodImg from '../../../assets/images/expenseListItem/food.svg';
import homeImg from '../../../assets/images/expenseListItem/home.svg';
import transportImg from '../../../assets/images/expenseListItem/taxi.svg';
import productsImg from '../../../assets/images/expenseListItem/products.svg';
import entertainmentImg from '../../../assets/images/expenseListItem/entertainment.svg';
import { Desktop, Mobile, Tablet } from '../../../common/deviceSizes';
import { useDispatch } from 'react-redux';
import transactionOperations from '../../../redux/operations/transactionOperations';
import useReduxState from '../../../hooks/useReduxState';
import { useInput } from '../../../hooks/useInputValue';
import {
  Button,
  Category,
  CategoryWrapper,
  Date,
  EditButton,
  ExpenseName,
  Form,
  IconWrapper,
  Input,
  Label,
  Select,
  Value,
  Wrapper,
  WrapperSecondary,
  LeftWrapper,
  RightWrapper,
  WrapperSecondary2,
} from './expenseListItemStyled';

const ExpenseListItem = ({ expense, date }) => {
  const dispatch = useDispatch();
  const { categories } = useReduxState();

  const [img, setImg] = useState();
  useEffect(() => {
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
