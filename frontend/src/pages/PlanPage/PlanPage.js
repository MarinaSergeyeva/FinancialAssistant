import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlanForm from '../../components/PlanForm/PlanForm';
import PrognosisBuy from '../../components/PrognosisBuy/PrognosisBuy';
import { statsFlatSelectors } from '../../redux/selectors';
import { PlanPageStyled } from './planPageStyled';

const fields = {
  totalSalary: 0,
  passiveIncome: 0,
  balance: 0,
  flatPrice: 0,
  flatSquareMeters: 0,
  incomePercentageToSavings: 0,
};

const PlanPage = () => {
  const [state, getState] = useState(fields);

  const history = useHistory();
  const initiatedStats = useSelector(state =>
    statsFlatSelectors.getStatsFlat(state),
  );
  useEffect(() => {
    if (initiatedStats > 0) {
      history.replace('/expense');
    }
  }, []);

  return (
    <PlanPageStyled>
      <PlanForm state={state} getState={getState} />
      <PrognosisBuy fields={{ ...state }} />
    </PlanPageStyled>
  );
};

export default PlanPage;
