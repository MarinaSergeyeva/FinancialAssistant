import React, { useEffect, useState } from 'react';
import { ExpenseFormStyled } from '../ExpenseForm/expenseFormStyled';
import calculatorIcon from '../../assets/icons/icon-calculator.svg';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/actions';

const ExpenseForm = () => {
  const [comment, setHandleExpenseItem] = useState('Test');
  const [category, setHandleCategory] = useState('Транспорт');
  const [amount, setHandleAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // const newTransaction = {
    //   expenseItem,
    //   category,
    //   amount,
    // };

    // setHandleExpenseItem('');
    // setHandleCategory('');
    // setHandleAmount('');
  };
  const dispatch = useDispatch();
  const handleChange = e => {
    setHandleAmount(Number(e.target.value));
  };

  useEffect(() => {
    const newTransaction = {
      comment,
      category,
      amount,
    };
    dispatch(userActions.changeTransactionSuccess(newTransaction));
  }, [amount]);
  return (
    <ExpenseFormStyled>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="smallFormContainer">
            <label>
              <span>Со счета</span>
              <select defaultValue="value1" type="text">
                <option defaultValue>Карта VISA (Ваня)</option>
              </select>
              <p>Остаток на счете: 80 000 UAH</p>
            </label>
            <label>
              <span>Название статьи</span>
              <input type="text" />
            </label>
          </div>
          <div className="smallFormContainer smallFormContainer_last">
            <label>
              <span>На категорию</span>
              <select defaultValue="value2" type="text">
                <option defaultValue>Развлечения</option>
              </select>
            </label>
            <label>
              <span>Сумма</span>
              <input
                className="calc-input"
                type="number"
                onChange={handleChange}
                value={amount}
              />
              <img
                className="calc-icon"
                src={calculatorIcon}
                alt="calculator icon"
              />
            </label>
          </div>
        </div>
      </form>
    </ExpenseFormStyled>
  );
};

export default ExpenseForm;
