import * as React from "react";
import { SVGProps } from "react";
const CheckSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={11}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="m.715 4.433 4.174 4.266 7.826-8"
    />
  </svg>
);
export default CheckSvg;
