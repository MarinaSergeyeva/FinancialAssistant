import React from 'react';

const IconEdit = ({ color, width, height }) => {
  const colorfill = color || '#7C9AF2';
  const widthIcon = width || '14';
  const heightIcon = height || '14';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width={widthIcon}
      height={heightIcon}
      fill={colorfill}
      aria-labelledby="title"
    >
      <title id="title">Edit</title>
      <path d="M0.25 10.9375V13.75H3.0625L11.3575 5.45498L8.545 2.64248L0.25 10.9375ZM13.5325 3.27998C13.825 2.98748 13.825 2.51498 13.5325 2.22248L11.7775 0.467483C11.485 0.174983 11.0125 0.174983 10.72 0.467483L9.3475 1.83998L12.16 4.65248L13.5325 3.27998Z" />
    </svg>
  );
};

export default IconEdit;
