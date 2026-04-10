import { ReactNode } from "react";

interface BadgeIconProps {
  icon: ReactNode;
  className?: string;
}

const BadgeIcon = ({ icon, className }: BadgeIconProps) => {
  return (
    <div
      className={`flex items-center justify-between rounded-[10px] p-4 w-fit text-white ${className}`}
    >
      {icon}
    </div>
  );
};

export default BadgeIcon;
