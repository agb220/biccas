import Image from "next/image";
import Button from "./shared/Button";
import { features } from "./_constants/constants";

const FeaturesSection = () => {
  return (
    <section className="container py-32.5">
      <div className="flex justify-between gap-6 lg:gap-2 items-center flex-col lg:flex-row mb-18.5">
        <h2 className="text-[28px] md:text-[38px] xl:text-[50px] font-semibold lg:max-w-82.75">
          Our Features you cab get
        </h2>
        <p className="font-medium text-[16px] text-[#A6A6A6] lg:max-w-115.25">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly
        </p>
        <Button className="rounded-[70px] hidden md:block">Get Started</Button>
      </div>
      <div className="overflow-x-auto mb-12 md:mb-0">
        <ul className="flex gap-5 md:gap-11 justify-between items-center">
          {features.map((feature, index) => (
            <FeatureCard {...feature} key={index} />
          ))}
        </ul>
      </div>

      <Button className="rounded-[70px]  md:hidden w-full">Get Started</Button>
    </section>
  );
};

export default FeaturesSection;

interface FeatureCardProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <li className="rounded-[20px] shadow-[0_50px_20px_rgba(0,0,0,0.04)] bg-white group flex flex-col gap-7.5 w-full min-w-full md:min-w-91 border border-green-50 hover:border-[#54BD95] transition-colors duration-500">
      <div className="aspect-364/430 h-90 md:h-107.5 w-full md:w-auto overflow-hidden rounded-tr-[20px] rounded-tl-[20px]">
        <Image
          src={props.imgSrc}
          alt={props.title}
          width={464}
          height={530}
          className="object-cover object-center h-full w-full group-hover:scale-105 transition-scale duration-500 pointer-events-none "
        />
      </div>
      <div className="flex flex-col gap-5 p-2 text-[#191A15]">
        <h4 className="text-[24px] xl:text-[30px] font-semibold">
          {props.title}
        </h4>
        <p className="text-[#A6A6A6] text-sm xl:text-[18px] font-medium">
          {props.desc}
        </p>
      </div>
    </li>
  );
};
