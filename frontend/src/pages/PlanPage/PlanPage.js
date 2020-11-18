import React from 'react';
import PlanForm from '../../components/PlanForm/PlanForm';
import PrognosisBuy from '../../components/PrognosisBuy/PrognosisBuy';
import {
  PlanPageStyled,
  PlanFormWrapper,
  PrognosisBuyWrapper,
} from './planPageStyled';

const PlanPage = () => {
  return (
    <PlanPageStyled>
      {/* <PlanFormWrapper> */}
      <PlanForm />
      {/* </PlanFormWrapper> */}
      {/* <PrognosisBuyWrapper> */}
      <PrognosisBuy />
      {/* </PrognosisBuyWrapper> */}
    </PlanPageStyled>
  );
};

export default PlanPage;
