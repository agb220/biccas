import * as React from "react";
import { SVGProps } from "react";
const ImageSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <path d="M15.609 3.493 4.574 6.513c-.87.238-1.387 1.152-1.154 2.041l2.957 11.27c.233.888 1.128 1.416 1.999 1.178l11.034-3.02c.87-.238 1.387-1.152 1.154-2.041L17.608 4.67c-.234-.888-1.129-1.416-2-1.178Z" />
      <path d="M8.811 11.393a1.253 1.253 0 0 0 .866-1.531 1.222 1.222 0 0 0-1.5-.884 1.253 1.253 0 0 0-.865 1.53 1.222 1.222 0 0 0 1.5.885ZM19.72 12.721l-4.997-2.946-6.347 11.227" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 5.176 18.917 0l5.068 19.318L5.07 24.495z" />
      </clipPath>
    </defs>
  </svg>
);
export default ImageSvg;
