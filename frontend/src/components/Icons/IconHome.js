import React from 'react';

const IconHome = ({ color, width, height }) => {
  const colorfill = color || '#7C9AF2';
  const widthIcon = width || '16';
  const heightIcon = height || '13';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13"
      width={widthIcon}
      height={heightIcon}
      fill={colorfill}
      aria-labelledby="title"
    >
      <title id="title">Home</title>
      <path d="M13.25 4.975V1H11V2.95L8 0.25L0.5 7H2.75V13H6.5V8.5H9.5V13H13.25V7H15.5L13.25 4.975ZM6.5 5.5C6.5 4.675 7.175 4 8 4C8.825 4 9.5 4.675 9.5 5.5H6.5Z" />
    </svg>
  );
};

export default IconHome;
