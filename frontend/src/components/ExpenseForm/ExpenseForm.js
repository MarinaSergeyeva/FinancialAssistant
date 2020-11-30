import React, { useEffect, useState } from 'react';
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
import { userSelectors } from '../../redux/selectors';

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

const ExpenseForm = ({ resetForm }) => {
  const isTransactionSend = resetForm();

  const [showCalculator, setShowCalculator] = useState(false);

  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');

  const { balance, username } = useSelector(state =>
    userSelectors.getCurrentUser(state),
  );
  const categories = useSelector(state => categoriesSelector(state));
  const calculatorResult = useSelector(state =>
    calculatorSelector.calcResult(state),
  );

  const dispatch = useDispatch();

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  const onAmountChange = e => {
    setAmount(Number(e.target.value));
  };
  const onCommentChange = e => {
    setComment(e.target.value);
  };
  const onCategoryChange = e => {
    setCategory(e.target.value);
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

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
    // eslint-disable-next-line
  }, []);

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
    // eslint-disable-next-line
  }, [amount, category, comment]);

  return (
    <ExpenseFormStyled>
      <form>
        <div className="smallFormContainer">
          <label className="">
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
