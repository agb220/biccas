import * as React from "react";
import { SVGProps } from "react";

const NotionSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={35}
    fill="none"
    className={`notion-icon ${props.className || ""}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M28.802 13.454V28h-2.344l-6.854-9.908h-.12V28h-2.636V13.454h2.358l6.847 9.915h.128v-9.915h2.62Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M9.221 8h28.828v26H9.221zM36.331 6 30.46 1H2.718l5.87 5h27.743Z"
    />
    <path fill="currentColor" d="M8.22 7 0 0v28l8.22 7V7Z" />
  </svg>
);

export default NotionSvg;
