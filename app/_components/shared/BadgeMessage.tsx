import { CheckSvg } from "../_icon";

const BadgeMessage = () => {
  return (
    <div className="flex py-3 px-6 gap-3.75 bg-white rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-72.75">
      <div className="border-2 border-[#2E9C5D] flex items-center justify-center py-2 rounded-full w-6 h-6">
        <CheckSvg className="text-[#2E9C5D]" />
      </div>
      <p className="max-w-40 text-[18px]">Money Transfer Succesfull</p>
    </div>
  );
};

export default BadgeMessage;
