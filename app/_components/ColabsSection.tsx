"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { clients } from "./_constants/constants";

const ColabsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.4,
  });

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="container xl:px-10 pt-8 md:pt-12.5 pb-20 md:pb-32.5"
    >
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[26px] md:text-[32px] xl:text-[40px] font-bold text-center  mb-10 md:mb-14 xl:mb-18.5 text-[#191A15]"
      >
        More than 25,000 teams use Collabs
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center justify-between gap-10 overflow-x-auto no-scrollbar -mx-2 md:-mx-9 xl:mx-0"
      >
        {clients.map((client, index) => (
          <Client {...client} key={index} />
        ))}
      </motion.ul>
    </section>
  );
};

export default ColabsSection;

interface ClientProps {
  icon: React.ReactNode;
  label: string;
}

const Client = (props: ClientProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };
  return (
    <motion.li
      variants={itemVariants}
      className="group flex items-center gap-2 cursor-pointer text-[#45A587] xl:text-[#A6A6A6] hover:text-[#45A587] transition-colors duration-500"
    >
      <span>{props.icon}</span>
      <span className="font-semibold text-[26px] md:text-[30px] xl:text-[36px]">
        {props.label}
      </span>
    </motion.li>
  );
};
