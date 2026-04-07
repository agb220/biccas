import * as React from "react";
import { SVGProps } from "react";
const IntercomSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <rect width={30} height={30} fill="currentColor" rx={3} />
    <path
      fill="#fff"
      d="M4 7h2v12H4zM9 4h2v18H9zM14 4h2v18h-2zM19 4h2v18h-2z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 24c2.833 2.264 11 5.433 21 0"
    />
    <path fill="#fff" d="M24 7h2v12h-2z" />
  </svg>
);
export default IntercomSvg;
