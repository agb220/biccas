import * as React from "react";
import { SVGProps } from "react";
const DataBaseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g
      stroke="#F8F8FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <path d="M13.11 9.028c4.001 1.072 7.534.86 7.892-.474.357-1.334-2.597-3.284-6.598-4.356-4-1.072-7.534-.86-7.891.474-.358 1.333 2.596 3.284 6.597 4.356ZM19.491 14.189c-.358 1.336-3.866 1.552-7.891.473-4.025-1.078-6.955-3.02-6.597-4.356" />
      <path d="M6.512 4.672 3.492 15.94c-.357 1.336 2.573 3.278 6.598 4.356 4.025 1.078 7.534.863 7.892-.474l3.02-11.269" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="m5.176 0 19.319 5.176-5.176 19.319L0 19.319z" />
      </clipPath>
    </defs>
  </svg>
);
export default DataBaseSvg;
