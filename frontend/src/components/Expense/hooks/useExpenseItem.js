import { useDispatch } from 'react-redux';
import transactionOperations from '../../../redux/operations/transactionOperations';
import { useInput } from '../../../hooks/useInputValue';
import {
  IconFood,
  IconHome,
  IconOther,
  IconEntertainment,
  IconProducts,
  IconTransport,
} from '../../Icons';
import { useState } from 'react';

const useExpenseItem = (expense, date) => {
  const dispatch = useDispatch();

  let icon;
  switch (expense.category) {
    case 'ЖКХ':
      icon = <IconHome />;
      break;
    case 'Продукты':
      icon = <IconFood />;
      break;
    case 'Развлечения':
      icon = <IconEntertainment />;
      break;
    case 'Товары':
      icon = <IconProducts />;
      break;
    case 'Транспорт':
      icon = <IconTransport />;
      break;
    default:
      icon = <IconOther />;
  }

  const [showInput, setShowInput] = useState(false);

  const openEdit = () => {
    setShowInput(true);
  };

  const closeEdit = () => {
    setShowInput(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await dispatch(
      transactionOperations.updateTransactionExpense(
        updatedExpense,
        expense._id,
      ),
    );
    closeEdit();
    const dateObj = new Date(date);
    await dispatch(
      transactionOperations.getExpenseStats(
        dateObj.getMonth() + 1,
        dateObj.getFullYear(),
      ),
    );
  };

  const amount = useInput(expense.amount);
  const comment = useInput(expense.comment);
  const category = useInput(expense.category);

  const updatedExpense = {
    amount: Number(amount.bind.value),
    comment: comment.bind.value,
    category: category.bind.value,
    _id: expense._id,
  };
  return {
    openEdit,
    handleSubmit,
    showInput,
    inputs: { amount, comment, category },
    icon,
  };
};

export default useExpenseItem;
