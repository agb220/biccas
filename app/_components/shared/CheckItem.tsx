import { CheckSvg } from "../_icon";

interface CheckItemProps {
  id: string;
  item: string;
}

const CheckItem = (props: CheckItemProps) => {
  return (
    <li className="flex items-center gap-5">
      <div className="rounded-full bg-[#54BD95] p-1 h-8 w-8 flex items-center justify-center">
        <CheckSvg className="text-white" />
      </div>
      <p className="font-medium text-[18px]">{props.item}</p>
    </li>
  );
};

export default CheckItem;
