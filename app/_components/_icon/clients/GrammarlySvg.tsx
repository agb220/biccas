import * as React from "react";
import { SVGProps } from "react";
const GrammarlySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="currentColor" />
    <path stroke="#fff" strokeWidth={2} d="M21 15a7 7 0 1 1-2-4.899" />
    <path stroke="#fff" strokeWidth={2} d="m17 17 4-2 2.5 3.5" />
  </svg>
);
export default GrammarlySvg;
