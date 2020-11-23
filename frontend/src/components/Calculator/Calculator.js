import React, { useState } from 'react';

import * as math from 'mathjs';
import { Button } from './CalcButton/CalcButton';
import styled from 'styled-components';
import Input from './CalcInput/CalcInput';
import { ClearButton } from './CalcButton/ClearButton';
import device from '../../common/deviceSizes';
import { useDispatch } from 'react-redux';
import calculatorActions from '../../redux/actions/calculatorActions';

const Calculator = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('0');
  const [isCalcShow, setIsCalcShow] = useState(true);

  const closeCalc = () => {
    setIsCalcShow(false);
  };

  const addToInput = val => {
    if (input === '0') {
      if (val === '+/-') {
        return;
      }
      return setInput(val);
    }

    if (val === '+/-') {
      console.log('input', input);
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
    setIsCalcShow(false);
    dispatch(
      calculatorActions.calcResultSuccess(
        Math.round(math.evaluate(input) * 100) / 100,
      ),
    );
  };

  return (
    <>
      {isCalcShow && (
        <CalculatorWrapper>
          <Row justifyContent={'flex-end'}>
            <Input input={input} />
          </Row>
          <Row>
            <ClearButton
              handleClear={() => {
                setInput('0');
              }}
              handleClick={addToInput}
            >
              AC
            </ClearButton>
            <Button handleClick={addToInput}>+/-</Button>
            <Button handleClick={addToInput}> % </Button>
            <Button handleClick={addToInput}> / </Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}> * </Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}> + </Button>
          </Row>
          <Row>
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}> - </Button>
          </Row>
          <RowD>
            <Button radius={'22px'} handleClick={addToInput}>
              0
            </Button>
            <RowL>
              <Button handleClick={addToInput}>.</Button>
              <Button handleClick={() => handleEqual()}>=</Button>
            </RowL>
          </RowD>
        </CalculatorWrapper>
      )}
    </>
  );
};

export default Calculator;

const RowD = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const RowL = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalculatorWrapper = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
  align-items: center;
  height: 394px;
  width: 263px;
  background-color: #f3f3f5;
  border-radius: 8px;
  @media ${device.tablet} {
    height: 239px;
    width: 170px;
    padding: 18px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    height: 239px;
    width: 170px;
    padding: 18px;
    font-size: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-around'};
`;
