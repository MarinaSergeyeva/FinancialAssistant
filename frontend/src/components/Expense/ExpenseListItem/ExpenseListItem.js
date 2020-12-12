import React, { useState } from 'react';
import {
  IconEdit,
  IconFood,
  IconHome,
  IconOther,
  IconEntertainment,
  IconProducts,
  IconTransport,
} from '../../Icons';
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
  let icon;
  switch (expense.category) {
    case 'ЖКХ':
      icon = <IconHome />;
      break;
    case 'Продукты':
      icon = <IconFood />;
      break;
    case 'Развлечения':
      icon = <IconEntertainment />;
      break;
    case 'Товары':
      icon = <IconProducts />;
      break;
    case 'Транспорт':
      icon = <IconTransport />;
      break;
    default:
      icon = <IconOther />;
  }

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
    expense && (
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
                  <IconEdit width="20" height="20" />
                </EditButton>
              </WrapperSecondary>
              <WrapperSecondary>
                <Value>{expense.amount} грн</Value>
                <CategoryWrapper>
                  <IconWrapper>
                    <icon.type width="20" height="20" />
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
                  <IconEdit width="20" height="20" />
                </EditButton>
              </WrapperSecondary>
              <WrapperSecondary>
                <Value>{expense.amount} грн</Value>
                <CategoryWrapper>
                  <IconWrapper>
                    <icon.type width="20" height="20" />
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
                        <icon.type width="20" height="20" />
                      </IconWrapper>
                      <Category>{expense.category}</Category>
                    </CategoryWrapper>
                  </WrapperSecondary>
                </WrapperSecondary2>
                <EditButton onClick={openEdit}>
                  <IconEdit width="20" height="20" />
                </EditButton>
              </RightWrapper>
            </Wrapper>
          )}
        </Desktop>
      </>
    )
  );
};

export default ExpenseListItem;
