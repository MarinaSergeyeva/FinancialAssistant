import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations } from '../../redux/operations';
import { transactionSelectors } from '../../redux/selectors';

const ExpenseCategories = ({ date }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionSelectors.getCategories);

  // const catsMonth = Object.create(expensesCategories, { amount: { value: 0 } });
  // const catsMonth = Object.assign(expensesCategories, { amount: 0 });
  // let transactions = [];
  // let totalAmount = 0;
  useEffect(() => {
    // const getExpenses = () => {
    dispatch(transactionOperations.getTransactionsCats(date));
    // totalAmount = transactions.reduce((acc, item) => {
    //   acc += item.amount;
    //   return acc;
    // }, 0);
    //   transactions.forEach(item => {
    //     for (let cat in catsMonth) {
    //       if (cat.name === item.category) {
    //         cat.amount += item.amount;
    //       }
    //     }
    //     totalAmount += item.amount;
    //   });
    // };
    // getExpenses();
  }, [date]);
  for (let cat in transactions) {
    for (let item of expensesCategories) {
      const key = Object.keys(item)[0];
      if (cat === key) {
        item[key].amount += transactions[cat];
      }
    }
  }
  return transactions ? (
    <ul>
      {expensesCategories.map(item => {
        const cat = Object.keys(item)[0];
        return (
          <li key={cat}>
            <span>{item[cat].name}</span>
            <span>{item[cat].amount}</span>
          </li>
        );
      })}
    </ul>
  ) : (
    <h1>No items</h1>
  );
};

export default ExpenseCategories;

const expensesCategories = [
  {
    other: {
      name: 'Другое',
      icon: 'other',
      amount: 0,
    },
  },
  {
    entertainment: {
      name: 'Развлечения',
      icon: 'cafe',
      amount: 0,
    },
  },
  {
    food: {
      name: 'Продукты',
      icon: 'food',
      amount: 0,
    },
  },
  {
    products: {
      name: 'Товары',
      icon: 'clothes',
      amount: 0,
    },
  },
  {
    transport: {
      name: 'Транспорт',
      icon: 'transport',
      amount: 0,
    },
  },
  {
    services: {
      name: 'ЖКХ',
      icon: 'home',
      amount: 0,
    },
  },
];
