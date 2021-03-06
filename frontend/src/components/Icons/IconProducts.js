import React from 'react';

const IconProducts = ({ color, width, height }) => {
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
      <title id="title">Products</title>
      <path d="M15.2002 11.65L8.75019 6.8125V6.13C9.98769 5.7625 10.8502 4.5025 10.5727 3.0925C10.3777 2.11 9.59769 1.2925 8.61519 1.0675C6.90519 0.677496 5.37519 1.975 5.37519 3.625H6.87519C6.87519 3.0025 7.37769 2.5 8.00019 2.5C8.62269 2.5 9.12519 3.0025 9.12519 3.625C9.12519 4.255 8.60769 4.765 7.97769 4.75C7.57269 4.7425 7.25019 5.0875 7.25019 5.4925V6.8125L0.800195 11.65C0.222695 12.085 0.530195 13 1.25019 13H8.00019H14.7502C15.4702 13 15.7777 12.085 15.2002 11.65ZM3.50019 11.5L8.00019 8.125L12.5002 11.5H3.50019Z" />
    </svg>
  );
};

export default IconProducts;
