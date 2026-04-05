import Image from "next/image";
import Link from "next/dist/client/link";
import InputSub from "../shared/InputSub";

const Footer = () => {
  return (
    <footer className="bg-[#161C28] py-10">
      <div className="container">
        <div className="pb-15 flex flex-col xl:flex-row justify-between gap-10 xl:gap-5">
          <div className="flex flex-col gap-7.5">
            <Link
              href="/"
              className="max-w-20 max-h-5 md:max-w-40 md:max-h-7.5"
            >
              <Image
                src={"/images/logo.svg"}
                alt={"Biccas logo"}
                width={100}
                height={40}
                className="object-center"
              />
            </Link>
            <div className="flex flex-col items-start gap-7.5">
              <div className="text-[#A6A6A6] text-[18px]">
                Get started noew try our product
              </div>
              <InputSub />
            </div>
          </div>
          <div className="text-[18px] flex justify-between gap-20 xl:gap-16 flex-wrap">
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Support</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <div className="hover:text-[#54BD95] transition-colors duration-500 cursor-pointer">
                  Help centre
                </div>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Account information
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  About
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Help and Solution</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <div className="hover:text-[#54BD95] transition-colors duration-500 cursor-pointer">
                  Talk to support
                </div>
                <div className="hover:text-[#54BD95] transition-colors duration-500 cursor-pointer">
                  Support docs
                </div>
                <div className="hover:text-[#54BD95] transition-colors duration-500 cursor-pointer">
                  System status
                </div>
                <div className="hover:text-[#54BD95] transition-colors duration-500 cursor-pointer">
                  Covid responde
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Product</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Update
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Security
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Beta test
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-[#54BD95] transition-colors duration-500"
                >
                  Pricing product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col xl:flex-row items-center justify-between gap-5 text-[18px] font-medium">
          <div className="text-center xl:text-start">
            © 2022 Biccas Inc. Copyright and rights reserved
          </div>
          <div className="flex gap-1 items-center">
            <span className="hover:text-[#54BD95] transition-colors duration-500">
              Terms and Condtions
            </span>
            <span className="h-1 w-1 bg-white rounded-full"></span>
            <span className="hover:text-[#54BD95] transition-colors duration-500">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
