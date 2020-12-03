import React from 'react';
import { Button } from './CalcButton/CalcButton';
import Input from './CalcInput/CalcInput';
import { ClearButton } from './CalcButton/ClearButton';
import useCalcLogic from './hooks/useCalcLogic';
import { CalculatorWrapper, Row, RowD, RowL } from './calculatorStyled';

const Calculator = ({ closeModal }) => {
  const { isCalcShow, inputValues, handleEqual } = useCalcLogic(closeModal);

  const { input, addToInput, setInput } = inputValues;

  const getResult = () => {
    handleEqual();
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
              <Button handleClick={getResult}>=</Button>
            </RowL>
          </RowD>
        </CalculatorWrapper>
      )}
    </>
  );
};

export default Calculator;
