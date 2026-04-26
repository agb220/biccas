"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import Button from "./shared/Button";
import Badge from "./shared/Badge";
import BadgeIcon from "./shared/BadgeIcon";
import { useAuth } from "@/context/AuthContext";
import { CheckSvg, DataBaseSvg, MessageSvg } from "./_icon";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { handlePlanSelection } = useAuth();

  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const badgeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
    },
  };

  return (
    <section className="xl:pt-52.5 xl:pb-32.5 pt-20 md:pt-30 pb-20 overflow-hidden">
      <div
        ref={containerRef}
        className="container flex items-center flex-col xl:flex-row gap-8.75 justify-between"
      >
        <motion.div
          className="flex flex-col xl:max-w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={itemVariants}
            className="text-[38px] md:text-[56px] xl:text-[80px] font-bold mb-7.5"
          >
            We’re here to Increase your Productivity
          </motion.h1>
          <div className="mb-7.5 w-full max-w-121.75">
            <svg
              width="487"
              height="34"
              viewBox="0 0 487 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <motion.path
                d="M4.00104 30C73.6317 10.3798 266.915 -17.0885 483.001 30"
                stroke="#54BD95"
                strokeWidth="8"
                strokeLinecap="round"
                variants={lineVariants}
              />
            </svg>
          </div>
          <motion.p
            variants={itemVariants}
            className="mt-12.5 mb-12.5 text-black text-[18px] font-medium"
          >
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              className="rounded-[40px] py-5 px-7.5"
              onClick={() => handlePlanSelection("free")}
            >
              Try free trial
            </Button>
          </motion.div>
        </motion.div>
        <div className="relative max-w-[320px] md:max-w-102.5 mx-auto xl:mx-0 mt-10 xl:mt-0">
          <motion.div
            custom={0.2}
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute top-[-5%] md:top-[5%] left-[15%] md:-left-[10%] -translate-x-[30%] md:-translate-x-[50%] z-10"
          >
            <Badge
              title={"Enter amount"}
              price={"450.00"}
              isShowLine
              isShowBtn
              classname="w-65.5"
            />
          </motion.div>
          <motion.div
            custom={0.5}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-[20%] md:top-[35%] left-0 md:-left-20 -translate-x-1/2 z-10"
          >
            <BadgeIcon
              icon={<CheckSvg />}
              className="bg-[#4535af] -rotate-15"
            />
          </motion.div>
          <motion.div
            custom={0.8}
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bottom-[5%] left-0 md:-left-[15%] -translate-x-[20%] z-10"
          >
            <Badge
              title={"Total Income"}
              price={"245.00"}
              classname="min-w-34.5"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/images/hero/hero.jpg"}
              alt={"We’re here to Increase your Productivity"}
              width={410}
              height={526}
              className="object-contain object-center"
            />
          </motion.div>
          <motion.div
            custom={0.4}
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute top-[15%] right-0 translate-x-1/3 z-10"
          >
            <BadgeIcon
              icon={<DataBaseSvg />}
              className="bg-[#FBC75E] rotate-15"
            />
          </motion.div>
          <motion.div
            custom={1.1}
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bottom-[15%] -right-[10%] translate-x-[20%] translate-y-[10%] z-10 max-h-47 max-w-36.5"
          >
            <Image
              src={"/images/hero/card.png"}
              alt={"Card"}
              width={146}
              height={188}
              className="object-cover object-center"
            />
          </motion.div>
          <motion.div
            custom={0.7}
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute -bottom-[5%] right-[15%] z-10"
          >
            <BadgeIcon
              icon={<MessageSvg />}
              className="bg-[#FFAA94] rotate-15 p-3 z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
