import { cn } from "@/app/cn";
import { DiagramSvg } from "../_icon";

interface BadgeProps {
  title: string;
  price: string;
  isShowBtn?: boolean;
  isShowLine?: boolean;
  classname?: string;
}

const Badge = (props: BadgeProps) => {
  return (
    <div
      className={cn(
        "py-3.5 px-4.5 bg-white rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ",
        props.classname
      )}
    >
      <div
        className={cn(
          props.isShowBtn ? "w-full pb-1.25 border-b border-[#EEEEEE]" : ""
        )}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[12px] text-[#A9A7B6] mb-2">{props.title}</h3>
            <div
              className={cn(
                !props.isShowBtn && "flex justify-between items-end gap-7"
              )}
            >
              <span className="text-[18px] w-fit">$ {props.price}</span>{" "}
              {!props.isShowBtn && <DiagramSvg />}
            </div>
          </div>
          {props.isShowBtn && (
            <button className="text-white py-1.25 px-4 bg-[#52bd94] rounded-[40px]">
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Badge;
