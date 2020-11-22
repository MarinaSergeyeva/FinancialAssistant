import React from 'react';
import PlanForm from '../../components/PlanForm/PlanForm';
import PrognosisBuy from '../../components/PrognosisBuy/PrognosisBuy';
import { PlanPageStyled } from './planPageStyled';

const PlanPage = () => {
  return (
    <PlanPageStyled>
      <PlanForm />
      <PrognosisBuy />
    </PlanPageStyled>
  );
};

export default PlanPage;
