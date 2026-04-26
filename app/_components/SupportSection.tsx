"use client";
import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import { raiting, supportItems } from "./_constants/constants";
import StarSvg from "./_icon/StarSvg";

const SupportSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.4,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childColumnVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="bg-[#F9F8FE] py-15">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container flex flex-col lg:flex-row justify-between gap-14 xl:gap-6.75"
      >
        <motion.div
          variants={childColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col justify-between h-full gap-10 xl:gap-18"
        >
          <div className="flex flex-col gap-7.5">
            <motion.h2
              variants={itemFadeUp}
              className="text-[28px] md:text-[38px] xl:text-[50px] font-semibold"
            >
              How we support our pratner all over the world
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="font-medium text-[16px] text-[#A6A6A6]"
            >
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </motion.p>
          </div>
          <motion.ul
            variants={itemFadeUp}
            className="flex gap-20 max-w-127.25 flex-wrap md:flex-nowrap"
          >
            {raiting.map((item, index) => (
              <SupportRaiting
                raiting={item.raitin}
                label={item.label}
                key={index}
              />
            ))}
          </motion.ul>
        </motion.div>
        <div>
          <motion.ul
            variants={childColumnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: false }}
            className="flex flex-col gap-7.5"
          >
            {supportItems.map((itemSupport, index) => (
              <SupportItem {...itemSupport} key={index} />
            ))}
          </motion.ul>
        </div>
      </motion.div>
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
  const cardScaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.li variants={cardScaleVariants} className="flex gap-6">
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
    </motion.li>
  );
};
