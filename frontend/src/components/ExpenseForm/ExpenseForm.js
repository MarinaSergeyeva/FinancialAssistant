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
import device, { Mobile } from '../../common/deviceSizes';
import transactionOperations from '../../redux/operations/transactionOperations';
import transactionActions from '../../redux/actions/transactionActions';

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
  const [categories, setCategories] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const dispatch = useDispatch();

  const showCalculatorHandler = () => {
    setShowCalculator(!showCalculator);
  };

  useEffect(() => {
    transactionOperations.getTransactionCategories().then(result => {
      return setCategories(result.categories);
    });
  }, []);

  const comment = useInput('');
  const amount = useInput('');
  // const categories = [
  //   'Другое',
  //   'Развлечения',
  //   'Продукты',
  //   'Товары',
  //   'Транспорт',
  //   'ЖКХ',
  // ];
  const category = useInput('');

  const transactionInfo = {
    comment: comment.bind.value,
    amount: Number(amount.bind.value),
    category: category.bind.value,
  };
  // dispatch(transactionOperations.changeTransaction(transactionInfo));

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  useEffect(() => {
    // dispatch(transactionOperations.changeTransaction(transactionInfo));
    if (amount !== '') {
      dispatch(transactionActions.changeTransactionSuccess(transactionInfo));
    }
  }, [amount]);

  return (
    <ExpenseFormStyled>
      <form>
        <div className="smallFormContainer">
          <label className="">
            <span>Со счета</span>
            <select type="text">
              <option defaultValue>Карта VISA (Ваня)</option>
            </select>
            <p>Остаток на счете: 80 000 UAH</p>
          </label>
          <label>
            <span>Название статьи</span>
            <input type="text" {...comment.bind} />
          </label>

          <label>
            <span>На категорию</span>
            <select type="text" {...category.bind}>
              <option value="Без категории" defaultValue>
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
