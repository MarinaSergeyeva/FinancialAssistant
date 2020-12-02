import styled from 'styled-components';
import { device, size } from '../../common/deviceSizes';

export const DynamicsPageWrapper = styled.div`
  width: 280px;
  padding: 38px 0px 56px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 690px;
    padding: 74px;
  }
  @media ${device.desktop} {
    width: 1170px;
    display: flex;
    justify-content: space-between;
    padding: 60px 0px 64px;
  }
`;

export const GraphAnnualWrapper = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ProgressPicturePresentWrapper = styled.div``;

export const GrafWrapper = styled.div`
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`;

export const AnnualWrapper = styled.div`
  margin-bottom: 30px;

  @media ${device.tablet} {
    margin-bottom: 75px;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
  }
`;

export const ProgressPictureWrapper = styled.div`
  @media ${device.tablet} {
    width: 510px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
    align-items: flex-end;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    align-items: flex-end;
  }
`;

export const ProgressInfoWrapper = styled.div`
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  @media (min-width: ${size.tablet}) {
    margin: 0px;
    width: 240px;
  }
`;

export const PictureWrapper = styled.div`
  margin-bottom: 42px;
  border: 2px solid #e5e9f2;
  border-radius: 8px;

  @media ${device.tablet} {
    margin-bottom: 0px;
    width: 240px;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
    width: 48%;
  }
`;

export const PresentWrapper = styled.div``;
