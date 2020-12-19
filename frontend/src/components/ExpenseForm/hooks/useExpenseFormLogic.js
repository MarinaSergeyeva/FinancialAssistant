import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useNumberInputValue,
  useTextInputValue,
} from '../../../hooks/useInputValue';
import useReduxState from '../../../hooks/useReduxState';
import transactionActions from '../../../redux/actions/transactionActions';
import categoriesOperations from '../../../redux/operations/categoriesOperations';

const useExpenseFormLogic = prop => {
  const { calculatorResult } = useReduxState();
  const dispatch = useDispatch();
  const isTransactionSend = prop;

  const [amount, setAmount, onAmountChange] = useNumberInputValue();
  const [comment, setComment, onCommentChange] = useTextInputValue();
  const [category, setCategory, onCategoryChange] = useTextInputValue();

  useEffect(() => {
    if (isTransactionSend) {
      setAmount(0);
      setComment('');
      setCategory('');
    }
  }, [isTransactionSend, setAmount, setComment, setCategory]);

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
  }, [dispatch, setComment, setCategory, setAmount]);

  useEffect(() => {
    if (calculatorResult) {
      setAmount(calculatorResult);
    }
  }, [calculatorResult, setAmount]);

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

  return {
    values: { amount, category, comment },
    onChange: { onAmountChange, onCommentChange, onCategoryChange },
  };
};

export default useExpenseFormLogic;
