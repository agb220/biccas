"use client";
import { useState } from "react";
import PlanCard from "./shared/PlanCard";
import { plans } from "./_constants/constants";
import Button from "./shared/Button";

const ChoosePlanSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col items-center text-center mb-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Choose Plan That’s Right For You
        </h2>
        <p className="text-[#A6A6A6] text-lg max-w-xl mb-10">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="flex gap-2 p-1 bg-white shadow-md rounded-xl">
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
        </div>
      </div>
      <div className="overflow-x-auto py-14">
        <ul className="flex gap-7 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChoosePlanSection;
