import Image from "next/image";
import FormBlock from "./shared/FormBlock";
import { QuoteSvg } from "./_icon";
import { reviews } from "./_constants/constants";

const FormSection = () => {
  return (
    <section className="bg-[#161C28] py-14 md:py-20 xl:py-32.5">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-25">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Choose Plan That’s Right For You
            </h2>
            <p className="text-base md:text-[18px] text-[#A6A6A6] font-medium mb-5 xl:mb-10">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div className="mb-10 flex flex-col gap-5 xl:gap-10">
              <QuoteSvg />
              <p className="text-[#A6A6A6] text-base md:text-[18px]">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <div className="text-[#A6A6A6] text-base md:text-[18px]">
                _ Aria Zinanrio
              </div>
            </div>
            <ul className="flex gap-5">
              {reviews.map((client, index) => (
                <li
                  key={index}
                  className="rounded-full overflow-hidden max-w-16.5 max-h-16.5"
                >
                  <Image
                    src={client}
                    alt={"Client review"}
                    height={66}
                    width={66}
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:min-w-153">
            <FormBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
