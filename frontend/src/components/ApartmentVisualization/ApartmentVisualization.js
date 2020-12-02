import React from 'react';
import apartmentImg from '../../assets/images/VisualizationApartment/flat_plan-min.jpg';
import useReduxState from '../../hooks/useReduxState';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import { ApartmentWrapper, Overlay } from './apartmentVizualization';

const ApartmentVisualization = () => {
  const { stats } = useReduxState();
  const { savingPercentage } = stats;

  const { isMobileDevice, isTabletDevice } = useDeviceSizes();

  return (
    <ApartmentWrapper>
      <img
        alt="flat-plan"
        src={apartmentImg}
        width={isTabletDevice ? '240' : isMobileDevice ? '280' : '269'}
        height="166"
      />
      <Overlay savingPercentage={savingPercentage}></Overlay>
    </ApartmentWrapper>
  );
};

export default ApartmentVisualization;
