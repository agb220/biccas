import * as React from "react";
import { SVGProps } from "react";
const MessageSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M18.845 16.603a1.667 1.667 0 0 1-2.041 1.179l-9.66-2.588-4.082 2.357 3.45-12.88a1.667 1.667 0 0 1 2.042-1.178l11.27 3.02a1.666 1.666 0 0 1 1.178 2.04l-2.157 8.05Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="m5.176 0 19.319 5.176-5.176 19.319L0 19.319z" />
      </clipPath>
    </defs>
  </svg>
);
export default MessageSvg;
