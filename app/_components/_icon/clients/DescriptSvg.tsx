import * as React from "react";
import { SVGProps } from "react";
const DescriptSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.071 1.417C18.946 2.325 20 3.555 20 4.84H0c0-1.284 1.054-2.514 2.929-3.422C4.804.51 7.348 0 10 0s5.196.51 7.071 1.417ZM2.93 28.583C1.054 27.675 0 26.445 0 25.16h20c0 1.284-1.054 2.514-2.929 3.422C15.196 29.49 12.652 30 10 30s-5.196-.51-7.071-1.417ZM23 17.419v3.871h-6v-3.87h6ZM6 8.71H0v3.872h6V8.71Zm5 0h12v3.872H11V8.71Zm1 8.71H0v3.871h12v-3.87Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DescriptSvg;
