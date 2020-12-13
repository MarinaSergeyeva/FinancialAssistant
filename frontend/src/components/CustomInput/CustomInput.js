import React, { forwardRef } from 'react';
import { IconCalendar } from '../Icons';
import { BtnCalendar } from './customInputStyled';

const CustomInput = forwardRef(({ onClick, toggleOpen }, ref) => {
  const handleClick = () => {
    onClick();
    toggleOpen();
  };
  return (
    <BtnCalendar onClick={handleClick} ref={ref}>
      <IconCalendar color="rgba(24, 25, 31, 0.54)" />
    </BtnCalendar>
  );
});

export default CustomInput;
