import React from 'react';

const IconCalendar = ({ width, height, color }) => {
  const colorfill = color || 'rgba(24, 25, 31, 0.54)';
  const widthIcon = width || '14';
  const heightIcon = height || '16';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      width={widthIcon}
      height={heightIcon}
      fill={colorfill}
      aria-labelledby="title"
    >
      <title id="title">Calendar</title>
      <path d=" M12.25 2.25H11.5V0.75H10V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.2575 2.925 0.2575 3.75L0.25 14.25C0.25 15.075 0.9175 15.75 1.75 15.75H12.25C13.075 15.75 13.75 15.075 13.75 14.25V3.75C13.75 2.925 13.075 2.25 12.25 2.25ZM12.25 14.25H1.75V6H12.25V14.25ZM3.25 7.5H7V11.25H3.25V7.5Z" />
    </svg>
  );
};

export default IconCalendar;
