import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PlanForm from '../../components/PlanForm/PlanForm';
import PrognosisBuy from '../../components/PrognosisBuy/PrognosisBuy';
import { PlanPageStyled } from './planPageStyled';

const fields = {
  totalSalary: '',
  passiveIncome: '',
  balance: '',
  flatPrice: '',
  flatSquareMeters: '',
  incomePercentageToSavings: '',
};

const PlanPage = () => {
  const [state, getState] = useState(fields);

  return (
    <PlanPageStyled>
      <PlanForm state={state} getState={getState} />
      <PrognosisBuy fields={{ ...state }} />
    </PlanPageStyled>
  );
};

export default PlanPage;
