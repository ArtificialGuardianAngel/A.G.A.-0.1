import React from 'react';

import { SVGAttributes } from 'react';
interface Props extends SVGAttributes<HTMLOrSVGElement> {
  color: string;
}

const SendIcon: React.FC<Props> = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.738281"
        width="40"
        height="40"
        rx="20"
        fill="white"
        fillOpacity="0.1"
      />
      <path
        d="M28.6883 13L10.7852 15.3118L17.5343 20.8102M28.6883 13L20.2068 29L17.5343 20.8102M28.6883 13L17.5343 20.8102"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
