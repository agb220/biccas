import { ArrowSvg } from "../_icon";

const InputSub = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="relative w-full xl:max-w-102.5 xl:w-102.5">
        <input
          type="email"
          placeholder="Enter your ... here"
          className="w-full h-15 border border-[#A6A6A6] rounded-[70px] pl-3.75 pr-3.75 text-[18px] font-medium text-[#A6A6A6] placeholder:text-[#A6A6A6]/60 focus:outline-none focus:ring-1 focus:ring-[#54BD95] transition-all duration-500"
        />
        <button className="group absolute right-1.25 top-1/2 -translate-y-1/2 h-11.5 w-11.5 flex items-center justify-center border-2 border-transparent bg-[#54BD95] rounded-full hover:border-[#54BD95] hover:bg-transparent transition-colors duration-500 ease-out">
          <ArrowSvg className="group-hover:text-[#54BD95] text-white transition-colors duration-500 ease-out" />
        </button>
      </div>
    </div>
  );
};

export default InputSub;
