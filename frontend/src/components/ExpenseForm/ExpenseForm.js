import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Calculator from '../../components/Calculator/Calculator';
import Modal from '../Modal/Modal';
import operation from '../../redux/operations/userOperations';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from '../ExpenseForm/expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';
import device, { Desktop, Mobile, Tablet } from '../../common/deviceSizes';

const ExpenseForm = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const [expenseItem, setHandleExpenseItem] = useState('');
  const [category, setHandleCategory] = useState('');
  const [amount, setHandleAmount] = useState('');
  const dispatch = useDispatch();

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  // const handleChange = e => {
  //   console.log('hi');
  //   console.log('e.target', e.target.value);
  //   setHandleExpenseItem(e.target);
  // };

  const handleSubmit = e => {
    console.log('handleSubmit');
    e.preventDefault();
    const newTransaction = {
      expenseItem,
      category,
      amount,
    };

    dispatch(operation.createTransaction(newTransaction));
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  return (
    <ExpenseFormStyled>
      <form onSubmit={handleSubmit}>
        <div className="smallFormContainer">
          <label className="">
            <span>Со счета</span>
            <select value="value" type="text">
              <option value="value2" defaultValue>
                Карта VISA (Ваня)
              </option>
            </select>
            <p>Остаток на счете: 80 000 UAH</p>
          </label>
          <label>
            <span>Название статьи</span>
            <input
              type="text"
              onChange={e => {
                console.log('e.target.value', e.target.value);
                setHandleExpenseItem(e.target.value);
              }}
            />
          </label>

          <label>
            <span>На категорию</span>
            <select value="value" type="text">
              <option value="value2" defaultValue>
                Развлечения
              </option>
            </select>
          </label>
          <label>
            <span>Сумма</span>
            <input className="calc-input" type="number" />
          </label>
          <CalcIconStyled onClick={showCalculatorHandler}>
            <CalcIcon className="icon_hover" />
          </CalcIconStyled>
          {isMobileDevice ? (
            <Mobile>
              {showCalculator && (
                <Modal closeModal={showCalculatorHandler}>
                  <Calculator />
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
