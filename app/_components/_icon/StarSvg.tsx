import * as React from "react";

interface StarProps extends React.SVGProps<SVGSVGElement> {
  fillPercentage: number;
  id: string;
}

const StarSvg = ({ fillPercentage, id, ...props }: StarProps) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fillPercentage}%`} stopColor="#FFC107" />{" "}
          <stop offset={`${fillPercentage}%`} stopColor="#BBB" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="m12.364 0 2.918 8.983h9.445l-7.64 5.551 2.918 8.983-7.641-5.551-7.641 5.551 2.918-8.983L0 8.983h9.445L12.364 0Z"
      />
    </svg>
  );
};
export default StarSvg;
