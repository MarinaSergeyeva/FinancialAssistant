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

  return { isMobileDevice, isTabletDevice, isDesktopDevice };
};

export default useDeviceSizes;
