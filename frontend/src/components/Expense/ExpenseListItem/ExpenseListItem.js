import React from 'react';
import { IconEdit } from '../../Icons';
import { Desktop, Mobile, Tablet } from '../../../common/deviceSizes';
import useReduxState from '../../../hooks/useReduxState';
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
import useExpenseItem from '../hooks/useExpenseItem';

const ExpenseListItem = ({ expense, date }) => {
  const { categories } = useReduxState();
  const { openEdit, handleSubmit, showInput, inputs, icon } = useExpenseItem(
    expense,
    date,
  );
  return (
    expense && (
      <>
        <Mobile>
          {showInput ? (
            <Form onSubmit={handleSubmit}>
              <Label>
                Название: <Input type="text" {...inputs.comment.bind} />
              </Label>
              <Label>
                Сумма:
                <Input type="number" {...inputs.amount.bind} />
              </Label>
              <Label>
                Категория:
                <Select type="text" {...inputs.category.bind}>
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
              <Date>{date}</Date>
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
                Название: <Input type="text" {...inputs.comment.bind} />
              </Label>
              <Label>
                Сумма:
                <Input type="number" {...inputs.amount.bind} />
              </Label>
              <Label>
                Категория:
                <Select type="text" {...inputs.category.bind}>
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
              <Date>{date}</Date>
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
                <Date>{date}</Date>
                <Label>
                  Название: <Input type="text" {...inputs.comment.bind} />
                </Label>
              </LeftWrapper>
              <RightWrapper>
                <WrapperSecondary2>
                  <Label>
                    Сумма:
                    <Input type="number" {...inputs.amount.bind} />
                  </Label>
                  <WrapperSecondary>
                    <CategoryWrapper>
                      <label>
                        <Select type="text" {...inputs.category.bind}>
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
