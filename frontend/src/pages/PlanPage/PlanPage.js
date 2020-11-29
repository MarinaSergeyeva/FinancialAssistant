import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlanForm from '../../components/PlanForm/PlanForm';
import PrognosisBuy from '../../components/PrognosisBuy/PrognosisBuy';
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
  // const infoCurrentUser = useSelector(state => state.user.info);
  // const history = useHistory();

  // useEffect(() => {
  //   let live = false;
  //   if (infoCurrentUser.flatPrice && !live) {
  //     live = true;
  //     history.push('/expense');
  //   }
  // }, []);

  return (
    <PlanPageStyled>
      <PlanForm state={state} getState={getState} />
      <PrognosisBuy fields={{ ...state }} />
    </PlanPageStyled>
  );
};

export default PlanPage;
