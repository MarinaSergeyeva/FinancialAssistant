import React from 'react';
import GiftCompleting from '../../components/GiftCompleting/GiftCompleting';
import { MonthlyExecutionPlan } from '../MonthlyExecutionPlan/MonthlyExecutionPlan.js';
import ChartWrapper from '../ChartExpenseIncome/ChartWrapper.js';
import ProgressInfo from '../../components/ProgressInfo/ProgressInfo';
import ApartmentVisualization from '../../components/ApartmentVisualization/ApartmentVisualization';

import statsOperatioins from '../../redux/operations/statsOperatioins';
import Modal from '../../components/Modal/Modal';

import Congratulation from '../../components/Congratulation/Congratulation';
import Error from '../../components/Error/Error';

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
import useModal from '../../hooks/useModal';

const DynamicsPage = () => {
  const { modalStatus, openModal, closeModal } = useModal();
  const { isUpdateSuccess, isUpdateError } = modalStatus;
  const { openCongModalHook, openErrModalHook } = openModal;
  const { closeModalError, closeCongratulationModal } = closeModal;

  useDispatchOperation(null, statsOperatioins.getStatsFlat);
  return (
    <>
      {isUpdateSuccess && (
        <Modal closeModal={closeCongratulationModal}>
          <Congratulation closeModal={closeCongratulationModal} />
        </Modal>
      )}

      {isUpdateError && (
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
            <GiftCompleting
              openCongModal={openCongModalHook}
              openErrModal={openErrModalHook}
            />
          </PresentWrapper>
        </ProgressPicturePresentWrapper>
      </DynamicsPageWrapper>
    </>
  );
};

export default DynamicsPage;
