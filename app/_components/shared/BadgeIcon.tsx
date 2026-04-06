import { ReactNode } from "react";

interface BadgeIconProps {
  icon: ReactNode;
  className?: string;
}

const BadgeIcon = ({ icon, className }: BadgeIconProps) => {
  return <div className={`rounded-[10px] p-4 w-fit ${className}`}>{icon}</div>;
};

export default BadgeIcon;
