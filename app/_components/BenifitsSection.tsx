import Image from "next/image";
import Badge from "./shared/Badge";
import BadgeIcon from "./shared/BadgeIcon";
import BadgeMessage from "./shared/BadgeMessage";
import BadgeClient from "./shared/BadgeClient";
import CheckItem from "./shared/CheckItem";
import { ImageSvg } from "./_icon";
import { benefits } from "./_constants/constants";

const BenifitsSection = () => {
  return (
    <section className="pt-20 pb-28.5 bg-linear-to-br from-white to-[#E8F5F1]">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-5">
          <div className="flex flex-col gap-10 xl:max-w-110">
            <h2 className="text-[28px] md:text-[38px] xl:text-[50px] font-bold ">
              What Benifit Will You Get
            </h2>
            <ul className="flex flex-col gap-7.5">
              {benefits.map((benefit, index) => (
                <CheckItem {...benefit} key={index} />
              ))}
            </ul>
          </div>
          <div className="relative max-w-[320px] md:max-w-102.5 mx-auto xl:mx-0 mt-10 xl:mt-0 ">
            <div className="absolute top-[5%] left-[30%] md:left-[3%] -translate-x-1/2 z-10">
              <BadgeClient />
            </div>

            <div className="absolute top-[40%] left-0 md:-left-20 -translate-x-1/2 z-10">
              <BadgeIcon
                icon={<ImageSvg />}
                className="bg-[#74C9A9] -rotate-15 h-auto w-10"
              />
            </div>
            <div className="absolute bottom-[-5%] md:bottom-[5%] left-[20%] md:-left-[5%] xl:-left-[10%] -translate-x-[30%] md:-translate-x-[50%] z-10">
              <BadgeMessage />
            </div>
            <Image
              src={"/images/benefits/laptop.jpg"}
              alt={"What Benifit Will You Gety"}
              width={440}
              height={529}
              className="object-contain object-center rounded-[20px]"
            />
            <div className="absolute top-[30%] xl:top-[20%] right-[-30%] xl:-right-[35%] -translate-x-[50%] z-10">
              <Badge
                title={"Total Income"}
                price={"245.00"}
                classname="min-w-34.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenifitsSection;
