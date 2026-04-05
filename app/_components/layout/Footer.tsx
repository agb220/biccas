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
          <div className="text-[18px] flex justify-between gap-10 xl:gap-16 flex-wrap">
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Support</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <div>Help centre</div>
                <Link href={"/"}>Account information</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
              </div>
            </div>
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Help and Solution</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <div>Talk to support</div>
                <div>Support docs</div>
                <div>System status</div>
                <div>Covid responde</div>
              </div>
            </div>
            <div className="flex flex-col gap-7.5">
              <span className="text-white">Product</span>
              <div className="text-[#A6A6A6] flex flex-col gap-5">
                <Link href={"/"}>Update</Link>
                <Link href={"/"}>Security</Link>
                <Link href={"/"}>Beta test</Link>
                <Link href={"/"}>Pricing product</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center justify-between gap-5 text-[18px] font-medium">
          <div>© 2022 Biccas Inc. Copyright and rights reserved</div>
          <div className="flex gap-1 items-center">
            <span>Terms and Condtions</span>
            <span className="h-1 w-1 bg-white rounded-full"></span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
