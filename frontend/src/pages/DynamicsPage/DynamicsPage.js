import React, { useEffect, useState } from 'react';
import GiftCompleting from '../../components/GiftCompleting/GiftCompleting';
import { MonthlyExecutionPlan } from '../MonthlyExecutionPlan/MonthlyExecutionPlan.js';
import ChartWrapper from '../ChartExpenseIncome/ChartWrapper.js';
import ProgressInfo from '../../components/ProgressInfo/ProgressInfo';
import ApartmentVisualization from '../../components/ApartmentVisualization/ApartmentVisualization';
import { useDispatch, useSelector } from 'react-redux';
import statsOperatioins from '../../redux/operations/statsOperatioins';
import Modal from '../../components/Modal/Modal';
import {
  modalCongratulation,
  modalError,
} from '../../redux/selectors/modalSelector';
import Congratulation from '../../components/Congratulation/Congratulation';
import Error from '../../components/Error/Error';
import modalAction from '../../redux/actions/modalAction';
import {
  AnnualWrapper,
  DynamicsPageWrapper,
  GrafWrapper,
  GraphAnnualWrapper,
  PictureWrapper,
  PresentWrapper,
  ProgressInfoWrapper,
  ProgressPicturePresentWrapper,
  ProgressPictureWrapper,
} from './dynamicsPageStyled';
import useDispatchOperation from '../../hooks/useDispatchOperation';

const DynamicsPage = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(statsOperatioins.getStatsFlat());
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useDispatchOperation(null, statsOperatioins.getStatsFlat);

  const congratulationModal = useSelector(state => modalCongratulation(state));

  const errorModal = useSelector(state => modalError(state));

  const [errorState, setError] = useState(errorModal ? true : false);
  const closeModalError = () => {
    setError(false);
    dispatch(modalAction.closeModalError());
  };

  useEffect(() => {
    if (errorModal) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errorModal]);

  const [congratulationState, setCongratulation] = useState(
    congratulationModal ? true : false,
  );
  const closeCongratulationModal = () => {
    setCongratulation(false);
    dispatch(modalAction.closeModalCongratulation());
  };

  useEffect(() => {
    if (congratulationModal) {
      setCongratulation(true);
    } else {
      setCongratulation(false);
    }
  }, [congratulationModal]);

  return (
    <>
      {congratulationState && (
        <Modal closeModal={closeCongratulationModal}>
          <Congratulation closeModal={closeCongratulationModal} />
        </Modal>
      )}

      {errorState && (
        <Modal closeModal={closeModalError}>
          <Error closeModal={closeModalError} />
        </Modal>
      )}

      <DynamicsPageWrapper>
        <GraphAnnualWrapper>
          <GrafWrapper>
            <ChartWrapper />
          </GrafWrapper>
          <AnnualWrapper>
            <MonthlyExecutionPlan />
          </AnnualWrapper>
        </GraphAnnualWrapper>
        <ProgressPicturePresentWrapper>
          <ProgressPictureWrapper>
            <ProgressInfoWrapper>
              <ProgressInfo />
            </ProgressInfoWrapper>
            <PictureWrapper>
              <ApartmentVisualization />
            </PictureWrapper>
          </ProgressPictureWrapper>
          <PresentWrapper>
            <GiftCompleting />
          </PresentWrapper>
        </ProgressPicturePresentWrapper>
      </DynamicsPageWrapper>
    </>
  );
};

export default DynamicsPage;
