import * as React from "react";
import { SVGProps } from "react";
const DiagramSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#52BD94"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M15 16.667V8.333M10 16.667V3.333M5 16.667v-5"
    />
  </svg>
);
export default DiagramSvg;
