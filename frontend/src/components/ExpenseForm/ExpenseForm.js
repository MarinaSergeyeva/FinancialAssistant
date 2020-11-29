import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Calculator from '../../components/Calculator/Calculator';
import Modal from '../Modal/Modal';
import {
  ExpenseFormStyled,
  CalcIconStyled,
  CalcWrapper,
} from '../ExpenseForm/expenseFormStyled';
import { ReactComponent as CalcIcon } from '../../assets/icons/icon-calculator.svg';
import device, { Mobile } from '../../common/deviceSizes';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import transactionActions from '../../redux/actions/transactionActions';
import categoriesSelector from '../../redux/selectors/categoriesSelector';
import calculatorSelector from '../../redux/selectors/calculatorSelector';
import calculatorActions from '../../redux/actions/calculatorActions';
import { transactionSelectors, userSelectors } from '../../redux/selectors';

export const useInput = initialValue => {
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
  const [amount, setAmount] = useState('');

  const { balance } = useSelector(state => userSelectors.getCurrentUser(state));
  const categories = useSelector(state => categoriesSelector(state));
  const calculatorResult = useSelector(state =>
    calculatorSelector.calcResult(state),
  );

  const dispatch = useDispatch();

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  const onAmountChange = e => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    dispatch(categoriesOperations.getCategories());
    // eslint-disable-next-line
  }, []);

  const comment = useInput('');
  // const amount = useInput('');
  const category = useInput('');

  const transactionInfo = {
    comment: comment.bind.value,
    amount: Number(amount),
    category: category.bind.value,
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  useEffect(() => {
    setAmount(calculatorResult);
    dispatch(
      transactionActions.changeTransactionSuccess({
        ...transactionInfo,
        amount: calculatorResult,
      }),
    );
  }, [calculatorResult]);

  useEffect(() => {
    dispatch(transactionActions.changeTransactionSuccess(transactionInfo));
  }, [transactionInfo]);

  return (
    <ExpenseFormStyled>
      <form>
        <div className="smallFormContainer">
          <label className="">
            <span>Со счета</span>
            <select type="text">
              <option defaultValue>Карта VISA (Ваня)</option>
            </select>
            <p>Остаток на счете: {balance} UAH</p>
          </label>
          <label>
            <span>Название статьи</span>
            <input type="text" {...comment.bind} />
          </label>

          <label>
            <span>На категорию</span>
            <select type="text" {...category.bind}>
              <option key="Без категории" value="Без категории" defaultValue>
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
            {/* <input className="calc-input" type="number" {...amount.bind} /> */}
            <input
              className="calc-input"
              type="number"
              onChange={onAmountChange}
              value={amount}
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
