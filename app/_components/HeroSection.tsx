import Image from "next/image";
import Button from "./shared/Button";
import Badge from "./shared/Badge";
import BadgeIcon from "./shared/BadgeIcon";
import { CheckSvg, DataBaseSvg, MessageSvg } from "./_icon";

const HeroSection = () => {
  return (
    <section className="xl:pt-52.5 xl:pb-32.5 pt-20 md:pt-30 pb-20 overflow-hidden">
      <div className="container flex items-center flex-col xl:flex-row gap-8.75 justify-between">
        <div className="flex flex-col xl:max-w-1/2">
          <h1 className="text-[38px] md:text-[56px] xl:text-[80px] font-bold mb-7.5">
            We’re here to Increase your Productivity
          </h1>
          <Image
            src={"/images/hero/line.svg"}
            alt={"Line"}
            width={479}
            height={8}
          />
          <p className="mt-12.5 mb-12.5 text-black text-[18px] font-medium">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div>
            <Button className="rounded-[40px] py-5 px-7.5">
              Try free trial
            </Button>
          </div>
        </div>
        <div className="relative max-w-[320px] md:max-w-102.5 mx-auto xl:mx-0 mt-10 xl:mt-0">
          <div className="absolute top-[-5%] md:top-[5%] left-[15%] md:-left-[10%] -translate-x-[30%] md:-translate-x-[50%] z-10">
            <Badge
              title={"Enter amount"}
              price={"450.00"}
              isShowLine
              isShowBtn
              classname="w-65.5"
            />
          </div>
          <div className="absolute top-[20%] md:top-[35%] left-0 md:-left-20 -translate-x-1/2 z-10">
            <BadgeIcon
              icon={<CheckSvg />}
              className="bg-[#4535af] -rotate-15"
            />
          </div>
          <div className="absolute bottom-[5%] left-0 md:-left-[15%] -translate-x-[20%] z-10">
            <Badge
              title={"Total Income"}
              price={"245.00"}
              classname="min-w-34.5"
            />
          </div>
          <Image
            src={"/images/hero/hero.jpg"}
            alt={"We’re here to Increase your Productivity"}
            width={410}
            height={526}
            className="object-contain object-center"
          />
          <div className="absolute top-[15%] right-0 translate-x-1/3 z-10">
            <BadgeIcon
              icon={<DataBaseSvg />}
              className="bg-[#FBC75E] rotate-15"
            />
          </div>
          <div className="absolute bottom-[15%] -right-[10%] translate-x-[20%] translate-y-[10%] z-10 max-h-47 max-w-36.5">
            <Image
              src={"/images/hero/card.png"}
              alt={"Card"}
              width={146}
              height={188}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-[5%] right-[15%] z-10">
            <BadgeIcon
              icon={<MessageSvg />}
              className="bg-[#FFAA94] rotate-15 p-3 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
