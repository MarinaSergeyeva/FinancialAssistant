import React from 'react';
import Calculator from '../../components/Calculator/Calculator';
import Modal from '../Modal/Modal';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from './expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';
import { Mobile } from '../../common/deviceSizes';
import useShowCalculator from './hooks/useShowCalculator';
import useReduxState from '../../hooks/useReduxState';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import useExpenseFormLogic from './hooks/useExpenseFormLogic';

const ExpenseForm = ({ resetForm }) => {
  const { isMobileDevice } = useDeviceSizes();
  const [showCalculator, showCalculatorHandler] = useShowCalculator();
  const { userInfo, categories } = useReduxState();
  const { monthBalance } = userInfo;

  const { values, onChange } = useExpenseFormLogic(resetForm);
  const { amount, category, comment } = values;
  const { onAmountChange, onCommentChange, onCategoryChange } = onChange;

  return (
    <ExpenseFormStyled>
      <form>
        <div className="smallFormContainer">
          <label className="select-arrow">
            <span>Со счета</span>
            <select type="text">
              <option defaultValue>Карта VISA (**** 1234)</option>
            </select>
            <p>Остаток на счете: {monthBalance} UAH</p>
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
