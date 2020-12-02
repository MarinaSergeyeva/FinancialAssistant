import React from 'react';
import apartmentImg from '../../assets/images/VisualizationApartment/flat_plan-min.jpg';
import useReduxState from '../../hooks/useReduxState';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import { ApartmentWrapper, Overlay } from './apartmentVizualization';

const ApartmentVisualization = () => {
  const { stats } = useReduxState();
  const { savingsPercentage } = stats;

  const { isMobileDevice, isTabletDevice } = useDeviceSizes();

  return (
    <ApartmentWrapper>
      <img
        alt="flat-plan"
        src={apartmentImg}
        width={isTabletDevice ? '240' : isMobileDevice ? '280' : '269'}
        height="166"
      />
      <Overlay savingPercentage={savingsPercentage}></Overlay>
    </ApartmentWrapper>
  );
};

export default ApartmentVisualization;
