import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Calculator from '../../components/Calculator/Calculator';
import Modal from '../Modal/Modal';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from '../ExpenseForm/expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';
import { Mobile } from '../../common/deviceSizes';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import transactionActions from '../../redux/actions/transactionActions';
import useShowCalculator from './hooks/useShowCalculator';
import useReduxState from '../../hooks/useReduxState';
import {
  useTextInputValue,
  useNumberInputValue,
} from '../../hooks/useInputValue';
import useDeviceSizes from '../../hooks/useDeviceSizes';

const ExpenseForm = ({ resetForm }) => {
  const dispatch = useDispatch();
  const { userInfo, categories, calculatorResult } = useReduxState();
  const { balance } = userInfo;

  const isTransactionSend = resetForm();

  const [amount, setAmount, onAmountChange] = useNumberInputValue();
  const [comment, setComment, onCommentChange] = useTextInputValue();
  const [category, setCategory, onCategoryChange] = useTextInputValue();
  const { isMobileDevice } = useDeviceSizes();

  const [showCalculator, showCalculatorHandler] = useShowCalculator();

  useEffect(() => {
    if (isTransactionSend) {
      setAmount('');
      setComment('');
      setCategory('');
      resetForm();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransactionSend]);

  useEffect(() => {
    const transactionInfoLS = JSON.parse(
      localStorage.getItem('persist:transaction'),
    );
    if (transactionInfoLS) {
      setComment(JSON.parse(transactionInfoLS.comment));
      setCategory(JSON.parse(transactionInfoLS.category));
      setAmount(Number(JSON.parse(transactionInfoLS.amount)));
    }
    dispatch(categoriesOperations.getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (calculatorResult) {
      setAmount(calculatorResult);
    }
    // eslint-disable-next-line
  }, [calculatorResult]);

  useEffect(() => {
    const transactionInfo = {
      amount,
      category,
      comment,
    };

    if (transactionInfo) {
      dispatch(transactionActions.changeTransactionSuccess(transactionInfo));
    }
  }, [amount, category, comment, dispatch]);

  return (
    <ExpenseFormStyled>
      <form>
        <div className="smallFormContainer">
          <label className="select-arrow">
            <span>Со счета</span>
            <select type="text">
              <option defaultValue>Карта VISA (**** 1234)</option>
            </select>
            <p>Остаток на счете: {balance} UAH</p>
          </label>
          <label>
            <span>Название статьи</span>
            <input
              type="text"
              placeholder="Введите статью расходов"
              value={comment}
              onChange={onCommentChange}
            />
          </label>

          <label className="select-arrow">
            <span>На категорию</span>
            <select
              className="select-arrow"
              type="text"
              value={category}
              onChange={onCategoryChange}
            >
              <option key="Без категории" defaultValue>
                -- Выберите категорию --
              </option>
              {categories.map(elem => (
                <option value={elem} key={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Сумма</span>
            <input
              className="calc-input"
              type="number"
              placeholder="Введите сумму"
              onChange={onAmountChange}
              value={amount.toString()}
            />
          </label>
          <CalcIconStyled onClick={showCalculatorHandler}>
            <CalcIcon className="icon_hover" />
          </CalcIconStyled>
          {isMobileDevice ? (
            <Mobile>
              {showCalculator && (
                <Modal closeModal={showCalculatorHandler}>
                  <Calculator closeModal={showCalculatorHandler} />
                </Modal>
              )}
            </Mobile>
          ) : (
            <CalcWrapper>{showCalculator && <Calculator />}</CalcWrapper>
          )}
        </div>
      </form>
    </ExpenseFormStyled>
  );
};

export default ExpenseForm;
