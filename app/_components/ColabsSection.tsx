import { clients } from "./_constants/constants";

const ColabsSection = () => {
  return (
    <section className="container xl:px-10 pt-8 md:pt-12.5 pb-20 md:pb-32.5">
      <h2 className="text-[26px] md:text-[32px] xl:text-[40px] font-bold text-center  mb-10 md:mb-14 xl:mb-18.5 text-[#191A15]">
        More than 25,000 teams use Collabs
      </h2>
      <ul className="flex items-center justify-between gap-10 overflow-x-auto no-scrollbar -mx-2 md:-mx-9 xl:mx-0">
        {clients.map((client, index) => (
          <Client {...client} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ColabsSection;

interface ClientProps {
  icon: React.ReactNode;
  label: string;
}

const Client = (props: ClientProps) => {
  return (
    <li className="group flex items-center gap-2 cursor-pointer text-[#45A587] xl:text-[#A6A6A6] hover:text-[#45A587] transition-colors duration-500">
      <span>{props.icon}</span>
      <span className="font-semibold text-[26px] md:text-[30px] xl:text-[36px]">
        {props.label}
      </span>
    </li>
  );
};
