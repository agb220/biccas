import Link from "next/dist/client/link";
import CoinSvg from "../_icon/CoinSvg";
import Button from "./Button";
import Input from "./Input";

const FormBlock = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col justify-center items-center gap-1">
        <CoinSvg />
        <h3 className="text-white font-medium xl:text-[30px] md:text-[20px] text-base">
          Get Started
        </h3>
      </div>
      <form action="" className="flex flex-col gap-5">
        <Input label={"Email"} placeholder="Enter your ..." />
        <Input
          label="Message"
          placeholder="What are you say ?"
          isTextArea={true}
        />
        <Button>Request Demo</Button>
      </form>
      <div className="flex gap-1 self-end">
        <span className="text-[#A6A6A6]">or</span>
        <Link
          href="/"
          className="text-white hover:text-[#54BD95] transition-colors duration-500"
        >
          Start Free Trial
        </Link>
      </div>
    </div>
  );
};

export default FormBlock;
