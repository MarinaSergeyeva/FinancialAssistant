import React from 'react';

const IconGraph = ({ color, width, height }) => {
  const colorfill = color || '#FFFFFF';
  const widthIcon = width || '12';
  const heightIcon = height || '12';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={widthIcon}
      height={heightIcon}
      fill={colorfill}
      aria-labelledby="title"
    >
      <title id="title">Dynamics</title>
      <path d="M9.62398 3.46332V11.1976H8.79202V4.63517H6.41599V11.1976H5.58401V5.80704H3.20798V11.1976H2.376V6.9789H0V11.9007H12V3.46332H9.62398ZM1.67292 11.1976H0.703125V7.68202H1.67292V11.1976ZM4.88088 11.1976H3.91111V6.51015H4.88088V11.1976ZM8.08889 11.1976H7.11912V5.33829H8.08889V11.1976ZM11.2969 11.1976H10.3271V4.16644H11.2969V11.1976Z" />
      <path d="M10.3574 0.0993042L9.98736 0.697148L10.7404 1.16325L0.0209351 5.04998L0.26063 5.71101L10.9611 1.83112L10.6383 2.65348L11.2928 2.91037L11.9977 1.11466L10.3574 0.0993042Z" />
    </svg>
  );
};

export default IconGraph;
