"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Badge from "./shared/Badge";
import BadgeIcon from "./shared/BadgeIcon";
import BadgeMessage from "./shared/BadgeMessage";
import BadgeClient from "./shared/BadgeClient";
import CheckItem from "./shared/CheckItem";
import { ImageSvg } from "./_icon";
import { benefits } from "./_constants/constants";

const BenifitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const leftSideVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

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
  return (
    <section
      ref={ref}
      className="pt-20 pb-28.5 bg-linear-to-br from-white to-[#E8F5F1]"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-5">
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-10 xl:max-w-110"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[28px] md:text-[38px] xl:text-[50px] font-bold "
            >
              What Benifit Will You Get
            </motion.h2>
            <motion.ul className="flex flex-col gap-7.5">
              {benefits.map((benefit, index) => (
                <motion.li variants={itemVariants} key={index}>
                  <CheckItem {...benefit} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <div className="relative max-w-[320px] md:max-w-102.5 mx-auto xl:mx-0 mt-10 xl:mt-0 ">
            <motion.div
              custom={0.6}
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[5%] left-[30%] md:left-[3%] -translate-x-1/2 z-10"
            >
              <BadgeClient />
            </motion.div>

            <motion.div
              custom={0.8}
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[40%] left-0 md:-left-20 -translate-x-1/2 z-10"
            >
              <BadgeIcon
                icon={<ImageSvg />}
                className="bg-[#74C9A9] -rotate-15 h-auto w-10"
              />
            </motion.div>
            <motion.div
              custom={1.0}
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute bottom-[-5%] md:bottom-[5%] left-[20%] md:-left-[5%] xl:-left-[10%] -translate-x-[30%] md:-translate-x-[50%] z-10"
            >
              <BadgeMessage />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src={"/images/benefits/laptop.jpg"}
                alt={"What Benifit Will You Gety"}
                width={440}
                height={529}
                className="object-contain object-center rounded-[20px]"
              />
            </motion.div>
            <motion.div
              custom={0.7}
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute top-[30%] xl:top-[20%] right-[-30%] xl:-right-[35%] -translate-x-[50%] z-10"
            >
              <Badge
                title={"Total Income"}
                price={"245.00"}
                classname="min-w-34.5"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenifitsSection;
