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
import device, { Mobile } from '../../common/deviceSizes';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };
  const clear = () => setValue('');
  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

const ExpenseForm = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const dispatch = useDispatch();

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  const comment = useInput();
  const amount = useInput();
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  return (
    <ExpenseFormStyled>
      <form>
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
            <input type="text" {...comment.bind} />
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
            <input className="calc-input" type="number" {...amount.bind} />
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
