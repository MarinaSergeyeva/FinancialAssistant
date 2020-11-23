import React from 'react';
import styled from 'styled-components';
import apartmentImg from '../../assets/images/VisualizationApartment/flat_plan-min.jpg';
import { useMediaQuery } from 'react-responsive';
import device from '../../common/deviceSizes';
import { useSelector } from 'react-redux';
import statsFlatSelectors from '../../redux/selectors/statsFlatSelectors';

const ApartmentVisualization = () => {
  const savingPercentage = useSelector(state =>
    statsFlatSelectors.getSavingsPercentage(state),
  );

  const isOnMobile = useMediaQuery({
    query: device.mobile,
  });

  const isOnTablet = useMediaQuery({
    query: device.tablet,
  });

  return (
    <ApartmentWrapper>
      <img
        alt="flat-plan"
        src={apartmentImg}
        width={isOnTablet ? '240' : isOnMobile ? '280' : '269'}
        height="166"
      />
      <Overlay savingPercentage={savingPercentage}></Overlay>
    </ApartmentWrapper>
  );
};

export default ApartmentVisualization;

const ApartmentWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 166px;
  @media ${device.tablet} {
    width: 240px;
  }
  @media ${device.desktop} {
    width: 269px;
  }
`;

const Overlay = styled.div`
  background-image: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  background: ${props => {
    return ` linear-gradient(
    to right,
    rgba(124, 154, 242, 0.2) ${props.savingPercentage * 100}%,
    rgba(255, 255, 255, 0) ${props.savingPercentage * 100}%,
    rgba(255, 255, 255, 0) 100%,
    rgb(4, 120, 21) 100%
  )`;
  }};
`;
