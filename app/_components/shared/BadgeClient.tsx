import Image from "next/image";
import { ChatSvg, CheckSvg } from "../_icon";

const BadgeClient = () => {
  return (
    <div className="flex justify-between items-center py-3 px-6 gap-3.75 bg-white rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-72.75">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <Image
            src={"/images/benefits/client.png"}
            alt={"Amanda Young"}
            width={57}
            height={58}
          />
        </div>
        <div>
          <div className="text-[16px] font-medium">Amanda Young</div>
          <div className="font-medium text-[12px] text-[#A6A6A6]">
            Expert Saving Money
          </div>
        </div>
      </div>

      <div className="bg-[#74C9A9] flex items-center justify-center py-4 rounded-full min-w-10 h-10">
        <ChatSvg />
      </div>
    </div>
  );
};

export default BadgeClient;
