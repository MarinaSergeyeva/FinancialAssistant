import { device } from '../common/deviceSizes';
import { useMediaQuery } from 'react-responsive';

const useDeviceSizes = () => {
  // CONDITIONS //
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  const isLargeTablet = useMediaQuery({
    query: device.largeTablet,
  });

  return { isMobileDevice, isTabletDevice, isDesktopDevice, isLargeTablet };
};

export default useDeviceSizes;
