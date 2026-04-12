import * as React from "react";
import { SVGProps } from "react";
const QuoteSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M11.5 0h10l-7 38H0L11.5 0ZM35 0h10l-7 38H23.5L35 0Z"
    />
  </svg>
);
export default QuoteSvg;
