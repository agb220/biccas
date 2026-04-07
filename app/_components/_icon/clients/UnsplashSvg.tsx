import * as React from "react";
import { SVGProps } from "react";
const UnsplashSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M11 0h12v9H11zM0 23h34v9H0z" />
    <path fill="currentColor" d="M24 14h10v18H24zM0 14h10v18H0z" />
  </svg>
);
export default UnsplashSvg;
