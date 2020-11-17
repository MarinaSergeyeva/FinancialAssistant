import React from 'react';
import styled from 'styled-components';
import device, { size } from '../../common/deviceSizes';
//import { colors } from "../../stylesheet/vars";
import GiftCompleting from '../../components/GiftCompleting/GiftCompleting';
import { MonthlyExecutionPlan } from '../MonthlyExecutionPlan/MonthlyExecutionPlan.js';
import ChartWrapper from '../ChartExpenseIncome/ChartWrapper.js';
import ProgressInfo from '../../components/ProgressInfo/ProgressInfo';

const DynamicsPage = () => {
  return (
    <>
      {/* delete this comment */}
      {/* <p>'DynamicsPage'</p> */}
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
              <p>'Picture'</p>
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

const DynamicsPageWrapper = styled.div`
  padding: 38px 20px 56px;

  @media ${device.tablet} {
    padding: 74px 130px;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    padding: 60px 56px 64px;
  }
`;

const GraphAnnualWrapper = styled.div``;

const ProgressPicturePresentWrapper = styled.div``;

const GrafWrapper = styled.div`
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`;

const AnnualWrapper = styled.div`
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 75px;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
  }
`;

const ProgressPictureWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
`;

const ProgressInfoWrapper = styled.div`
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  @media (min-width: ${size.tablet}) {
    margin: 0px;
    width: 48%;
  }
`;

const PictureWrapper = styled.div`
  margin-bottom: 42px;

  @media ${device.tablet} {
    margin-bottom: 0px;
    width: 48%;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
    width: 48%;
  }
`;

const PresentWrapper = styled.div``;
