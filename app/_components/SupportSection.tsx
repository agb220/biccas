import Image from "next/image";
import { raiting, supportItems } from "./_constants/constants";
import StarSvg from "./_icon/StarSvg";

const SupportSection = () => {
  return (
    <section className="bg-[#F9F8FE] py-15">
      <div className="container flex flex-col lg:flex-row justify-between gap-14 xl:gap-6.75">
        <div className="flex flex-col justify-between h-full gap-10 xl:gap-18">
          <div className="flex flex-col gap-7.5">
            <h2 className="text-[28px] md:text-[38px] xl:text-[50px] font-semibold">
              How we support our pratner all over the world
            </h2>
            <p className="font-medium text-[16px] text-[#A6A6A6]">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
          </div>
          <ul className="flex gap-20 max-w-127.25">
            {raiting.map((item, index) => (
              <SupportRaiting
                raiting={item.raitin}
                label={item.label}
                key={index}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-7.5">
            {supportItems.map((itemSupport, index) => (
              <SupportItem {...itemSupport} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

interface SupportRaitingPrpops {
  raiting: string;
  label: string;
}

const SupportRaiting = ({ raiting, label }: SupportRaitingPrpops) => {
  const numericRating = parseFloat(raiting);
  return (
    <li className="flex flex-col gap-4.5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => {
          const fill = Math.max(
            0,
            Math.min(100, (numericRating - index) * 100)
          );
          return (
            <StarSvg
              key={index}
              id={`star-${label}-${index}`}
              fillPercentage={fill}
              className="w-5 h-5"
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-4.5">
        <span className="text-[18px] font-bold">
          {raiting} <span className="font-medium">/ 5 rating</span>
        </span>
        <span className="text-gray-500 font-medium w-fit">{label}</span>
      </div>
    </li>
  );
};

interface SupportItemProps {
  title: string;
  desc: string;
  icon: string;
}

const SupportItem = (props: SupportItemProps) => {
  return (
    <li className="flex gap-6">
      <div className=" bg-white p-3.75 w-15 h-15">
        <Image
          src={props.icon}
          alt={props.title}
          width={30}
          height={30}
          className="object-cover object-center max-w-7.5"
        />
      </div>
      <div>
        <h4 className="font-bold text-[18px] xl:text-[28px] mb-2">
          {props.title}
        </h4>
        <p className="text-[#A6A6A6] text-[14px] xl:text-[18px] font-medium">
          {props.desc}
        </p>
      </div>
    </li>
  );
};
