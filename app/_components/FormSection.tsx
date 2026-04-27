"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import FormBlock from "./shared/FormBlock";
import { QuoteSvg } from "./_icon";
import { reviews } from "./_constants/constants";

const FormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const contentContainerVariants: Variants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#161C28] py-14 md:py-20 xl:py-32.5"
      id="contact"
    >
      <div className="container overflow-hidden">
        <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-25">
          <motion.div
            variants={contentContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-5"
            >
              Choose Plan That’s Right For You
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-[18px] text-[#A6A6A6] font-medium mb-5 xl:mb-10"
            >
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mb-10 flex flex-col gap-5 xl:gap-10"
            >
              <QuoteSvg />
              <p className="text-[#A6A6A6] text-base md:text-[18px]">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <div className="text-[#A6A6A6] text-base md:text-[18px]">
                _ Aria Zinanrio
              </div>
            </motion.div>
            <motion.ul variants={itemVariants} className="flex gap-5">
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
            </motion.ul>
          </motion.div>
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="xl:min-w-153"
          >
            <FormBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
