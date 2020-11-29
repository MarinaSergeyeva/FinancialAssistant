import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import { e } from 'mathjs';

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
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');

  // const comment = useInput('');
  // // const amount = useInput('');
  // const category = useInput('');

  let transactionInfo;

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

  // const transactionInfo = useMemo(
  //   () => ({
  //     comment: comment.bind.value,
  //     amount: Number(amount),
  //     category: category.bind.value,
  //   }),
  //   [amount],
  // );

  transactionInfo = {
    comment: comment.bind.value,
    amount: Number(amount),
    category: category.bind.value,
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  useEffect(() => {
    console.log('CDM');
    dispatch(categoriesOperations.getCategories());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAmount(calculatorResult);
    dispatch(
      transactionActions.changeTransactionSuccess({
        ...transactionInfo,
        amount: calculatorResult,
      }),
    );
    // eslint-disable-next-line
  }, [calculatorResult]);

  useEffect(() => {
    console.log('transactionInfo []', transactionInfo);

    dispatch(transactionActions.changeTransactionSuccess(transactionInfo));
    // eslint-disable-next-line
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
            <input
              type="text"
              placeholder="Введите статью расходов"
              {...comment.bind}
            />
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
              placeholder="Введите сумму"
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
