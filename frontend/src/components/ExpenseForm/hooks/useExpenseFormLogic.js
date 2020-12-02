import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useNumberInputValue,
  useTextInputValue,
} from '../../../hooks/useInputValue';
import useReduxState from '../../../hooks/useReduxState';
import transactionActions from '../../../redux/actions/transactionActions';
import categoriesOperations from '../../../redux/operations/categoriesOperations';

const useExpenseFormLogic = props => {
  const { calculatorResult } = useReduxState();
  const dispatch = useDispatch();
  const isTransactionSend = props();

  const [amount, setAmount, onAmountChange] = useNumberInputValue();
  const [comment, setComment, onCommentChange] = useTextInputValue();
  const [category, setCategory, onCategoryChange] = useTextInputValue();

  useEffect(() => {
    if (isTransactionSend) {
      setAmount('');
      setComment('');
      setCategory('');
      props();
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

  return {
    values: { amount, category, comment },
    onChange: { onAmountChange, onCommentChange, onCategoryChange },
  };
};

export default useExpenseFormLogic;
