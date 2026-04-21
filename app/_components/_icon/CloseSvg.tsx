import { SVGProps } from "react";

export const CloseSvg = ({
  stroke,
  fill,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    className={props.className}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 1 1 13m12 0L1 1"
    />
  </svg>
);
