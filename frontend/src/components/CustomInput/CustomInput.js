import React, { forwardRef } from 'react';
import { BtnCalendar, SvgIcon } from './customInputStyled';

const CustomInput = forwardRef(({ onClick, toggleOpen }, ref) => {
  const handleClick = () => {
    onClick();
    toggleOpen();
  };
  return (
    <BtnCalendar onClick={handleClick} ref={ref}>
      <SvgIcon id="calendar" viewBox="0 0 14 16">
        <path d=" M12.25 2.25H11.5V0.75H10V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.2575 2.925 0.2575 3.75L0.25 14.25C0.25 15.075 0.9175 15.75 1.75 15.75H12.25C13.075 15.75 13.75 15.075 13.75 14.25V3.75C13.75 2.925 13.075 2.25 12.25 2.25ZM12.25 14.25H1.75V6H12.25V14.25ZM3.25 7.5H7V11.25H3.25V7.5Z" />
      </SvgIcon>
    </BtnCalendar>
  );
});

export default CustomInput;
