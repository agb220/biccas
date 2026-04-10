import * as React from "react";
import { SVGProps } from "react";
const ChatSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M17.136 9.583a7.104 7.104 0 0 1-.735 3.167 7.03 7.03 0 0 1-2.556 2.858 6.83 6.83 0 0 1-3.645 1.059 6.722 6.722 0 0 1-3.1-.75L2.447 17.5l1.55-4.75a7.105 7.105 0 0 1-.734-3.167c0-1.315.36-2.604 1.037-3.723a6.992 6.992 0 0 1 2.798-2.61 6.722 6.722 0 0 1 3.1-.75h.409c1.7.096 3.307.829 4.511 2.06a7.136 7.136 0 0 1 2.017 4.607v.416Z"
    />
  </svg>
);
export default ChatSvg;
