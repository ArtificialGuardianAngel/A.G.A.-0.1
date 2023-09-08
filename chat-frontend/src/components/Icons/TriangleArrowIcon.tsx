import React from 'react';

interface Props {
  color: string;
}

const TriangleArrowIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M0.976562 1L5.01957 5.04301L0.976563 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TriangleArrowIcon;
