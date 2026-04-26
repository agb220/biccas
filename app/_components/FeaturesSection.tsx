"use client";
import { useRef } from "react";
import Image from "next/image";
import Button from "./shared/Button";
import { features } from "./_constants/constants";
import { useAuth } from "@/context/AuthContext";
import { motion, useInView, Variants } from "framer-motion";

const FeaturesSection = () => {
  const { handlePlanSelection } = useAuth();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="pt-32.5 pb-12.5">
      <div className="container">
        <motion.div
          variants={headerVariants}
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="flex justify-between gap-6 lg:gap-2 items-center flex-col lg:flex-row mb-18.5"
        >
          <motion.h2
            variants={itemFadeUp}
            className="text-[28px] md:text-[38px] xl:text-[50px] font-semibold lg:max-w-82.75"
          >
            Our Features you cab get
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="font-medium text-[16px] text-[#A6A6A6] lg:max-w-115.25"
          >
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your projrct esaly
          </motion.p>
          <motion.div variants={itemFadeUp}>
            <Button
              className="rounded-[70px] hidden md:block py-4.5 px-7.75"
              onClick={() => handlePlanSelection("free")}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
        <div className="overflow-x-auto mb-12 md:mb-0">
          <motion.ul
            variants={containerVariants}
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.2 }}
            className="flex gap-5 md:gap-11 justify-between items-center"
          >
            {features.map((feature, index) => (
              <FeatureCard {...feature} key={index} />
            ))}
          </motion.ul>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="px-container md:hidden"
      >
        <Button
          className="rounded-[70px] md:hidden w-full py-4.5 px-7.75"
          onClick={() => handlePlanSelection("free")}
        >
          Get Started
        </Button>
      </motion.div>
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
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.li
      variants={cardVariants}
      className="rounded-[20px] shadow-[0_50px_20px_rgba(0,0,0,0.04)] bg-white group flex flex-col gap-7.5 w-full min-w-full md:min-w-91 border border-green-50 hover:border-[#54BD95] transition-colors duration-500"
    >
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
    </motion.li>
  );
};
