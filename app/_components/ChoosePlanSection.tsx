"use client";
import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import PlanCard from "./shared/PlanCard";
import { plans } from "./_constants/constants";
import Button from "./shared/Button";

const ChoosePlanSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const headerContainerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section ref={ref} className="py-20 container mx-auto" id="pricing">
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center text-center mb-2"
      >
        <motion.h2
          variants={headerItemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Choose Plan That’s Right For You
        </motion.h2>
        <motion.p
          variants={headerItemVariants}
          className="text-[#A6A6A6] text-lg max-w-xl mb-10"
        >
          Choose plan that works best for you, feel free to contact us
        </motion.p>

        <motion.div
          variants={headerItemVariants}
          className="flex gap-2 p-1 bg-white shadow-md rounded-xl mb-5 xl;mb-0"
        >
          <Button
            onClick={() => setIsYearly(false)}
            className={`px-8 py-3 rounded-lg font-medium transition-all bg-white ${
              !isYearly ? "bg-[#54BD95] text-white" : "text-black"
            }`}
          >
            Bil Monthly
          </Button>
          <Button
            onClick={() => setIsYearly(true)}
            className={`px-8 py-3 rounded-lg font-medium transition-all bg-white ${
              isYearly ? "bg-[#54BD95] text-white" : "text-black"
            }`}
          >
            Bil Yearly
          </Button>
        </motion.div>
      </motion.div>
      <div className="overflow-x-auto xl:py-14">
        <motion.ul
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-7 max-w-6xl mx-auto items-stretch"
        >
          {plans.map((plan) => (
            <motion.li
              key={plan.id}
              variants={cardItemVariants}
              className="flex flex-1 min-w-full md:min-w-93.5"
            >
              <PlanCard plan={plan} isYearly={isYearly} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ChoosePlanSection;
