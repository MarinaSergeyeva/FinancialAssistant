import { useMediaQuery } from 'react-responsive';

export const size = {
  mobile: '320px',
  beforeTablet: '767px',
  tablet: '768px',
  beforeDesktop: '1279px',
  desktop: '1280px',
};

export const device = {
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.beforeTablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Mobile = ({ children }) => {
  const isMobileQuery = useMediaQuery({
    query: device.mobile,
  });
  return isMobileQuery && children;
};

export const Tablet = ({ children }) => {
  const isTabletQuery = useMediaQuery({
    query: device.tablet,
  });
  return isTabletQuery && children;
};

export const Desktop = ({ children }) => {
  const isDesktopQuery = useMediaQuery({
    query: device.desktop,
  });
  return isDesktopQuery && children;
};

export default device;
