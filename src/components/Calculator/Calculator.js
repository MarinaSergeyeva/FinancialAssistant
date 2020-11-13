import React, { useState } from 'react';

import * as math from 'mathjs';
import { Button } from './CalcButton/CalcButton';
import styled from 'styled-components';
import Input from './CalcInput/CalcInput';

const Calculator = () => {
  const [input, setInput] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
  };

  return (
    <CalculatorWrapper>
      <Input input={input} />
      <Row className="row">
        <Button handleClick={addToInput}>AC</Button>
        <Button handleClick={addToInput}>+/-</Button>
        <Button handleClick={addToInput}>%</Button>
        <Button handleClick={addToInput}>/</Button>
      </Row>
      <Row className="row">
        <Button handleClick={addToInput}>7</Button>
        <Button handleClick={addToInput}>8</Button>
        <Button handleClick={addToInput}>9</Button>
        <Button handleClick={addToInput}>*</Button>
        {/* <Button handleClick={addToInput}>/</Button> */}
      </Row>
      <Row className="row">
        <Button handleClick={addToInput}>4</Button>
        <Button handleClick={addToInput}>5</Button>
        <Button handleClick={addToInput}>6</Button>
        <Button handleClick={addToInput}>+</Button>
      </Row>
      <Row className="row">
        <Button handleClick={addToInput}>1</Button>
        <Button handleClick={addToInput}>2</Button>
        <Button handleClick={addToInput}>3</Button>
        <Button handleClick={addToInput}>-</Button>
      </Row>
      <Row className="row">
        <ZeroButton handleClick={addToInput}>0</ZeroButton>
        <Button handleClick={addToInput}>.</Button>
        <Button handleClick={() => handleEqual()}>=</Button>
      </Row>
    </CalculatorWrapper>
  );
};

export default Calculator;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-around;
  align-items: center;
  height: 394px;
  width: 263px;
  background-color: #f3f3f5;
  border-radius: 2px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const ZeroButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  color: #212638;
  flex: 1;
  width: 100px;
  height: 44px;
  border-radius: 22px;
  flex-grow: 2;
`;
