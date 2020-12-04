import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as math from 'mathjs';
import calculatorActions from '../../../redux/actions/calculatorActions';

const useCalcLogic = closeModal => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('0');
  const [isCalcShow, setIsCalcShow] = useState(true);

  const addToInput = val => {
    if (input === '0') {
      if (val === '+/-') {
        return;
      }
      return setInput(val);
    }

    if (val === '+/-') {
      if (!input.includes(' ')) {
        setInput(` - ${input}`);
      }

      const array = input.split(' ');

      if (array[array.length - 2] === '+') {
        array.splice(array.length - 2, 1, ' - ');
        const newInput = array.join('');
        setInput(newInput);
      }

      if (array[array.length - 2] === '-') {
        array.splice(array.length - 2, 1, ' + ');
        const newInput = array.join('');
        setInput(newInput);
      }

      return;
    }

    setInput(input + val);
  };

  const handleEqual = () => {
    setInput(0);
    closeModal ? closeModal() : setIsCalcShow(false);
    dispatch(
      calculatorActions.calcResultSuccess(
        Math.round(math.evaluate(input) * 100) / 100,
      ),
    );
  };

  return {
    isCalcShow,
    inputValues: { input, addToInput, setInput },
    handleEqual,
  };
};

export default useCalcLogic;
