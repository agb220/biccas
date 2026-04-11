import { plans } from "../_constants/constants";
import Button from "./Button";
import CheckItem from "./CheckItem";

interface PlanCardProps {
  plan: (typeof plans)[0];
  isYearly: boolean;
}

const PlanCard = ({ plan, isYearly }: PlanCardProps) => {
  const {
    id,
    title,
    description,
    monthlyPrice,
    yearlyPrice,
    features,
    buttonText,
    isPopular,
  } = plan;
  const price = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <li
      className={`flex flex-col p-5 rounded-[30px] transition-all border-2 border-transparent duration-500 hover:border-[#54BD95] min-w-full md:min-w-93.5 ${
        isPopular
          ? "bg-[#54BD95] text-white shadow-xl scale-105 hover:border-white hover:scale-110"
          : "bg-white text-black shadow-sm hover:border-[#54BD95] hover:scale-105"
      }`}
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className={`text-sm`}>{description}</p>
        <div className="mt-6">
          <span className="text-xl vertical-top">$</span>
          <span className="text-6xl font-bold">{price}</span>
        </div>
        {isYearly && isPopular && (
          <span className="inline-block mt-2 bg-white/20 px-3 py-1 rounded-full text-xs">
            Save $50 a year
          </span>
        )}
      </div>

      <ul className="flex flex-col gap-4 mb-10 grow bg-[#F9FAFB] p-4 rounded-[10px] text-[#191A15]">
        {features.map((feature, idx) => (
          <CheckItem key={idx} item={feature} id={id} />
        ))}
      </ul>

      <Button
        className={`w-full py-4 ${
          isPopular ? "bg-white text-[#74B699]" : "bg-white text-[#74B699]"
        }`}
        variant={"outline"}
      >
        {buttonText}
      </Button>
    </li>
  );
};

export default PlanCard;
