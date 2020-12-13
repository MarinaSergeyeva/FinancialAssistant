import React from 'react';

const IconFood = ({ color, width, height }) => {
  const colorfill = color || '#7C9AF2';
  const widthIcon = width || '16';
  const heightIcon = height || '14';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      width={widthIcon}
      height={heightIcon}
      fill={colorfill}
      aria-labelledby="title"
    >
      <title id="title">Food</title>
      <path d="M14.7875 11.17L1.31 11.875L1.25 10.75L14.735 10.045L14.7875 11.17ZM14.75 12.61H1.25V13.735H14.75V12.61ZM15.5 1.75V7C15.5 7.825 14.825 8.5 14 8.5H2C1.175 8.5 0.5 7.825 0.5 7V1.75C0.5 0.925 1.175 0.25 2 0.25H14C14.825 0.25 15.5 0.925 15.5 1.75ZM14 2.5C12.74 2.5 11.72 3.235 11.5925 4.1725C11.1125 3.625 9.545 2.125 6.6875 2.125C3.185 2.125 1.625 4.375 1.625 4.375C1.625 4.375 3.185 6.625 6.6875 6.625C9.545 6.625 11.1125 5.125 11.5925 4.5775C11.72 5.515 12.74 6.25 14 6.25V2.5Z" />
    </svg>
  );
};

export default IconFood;
