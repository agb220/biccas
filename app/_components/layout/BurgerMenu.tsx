interface BurgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerMenu = (props: BurgerMenuProps) => {
  return (
    <button
      onClick={props.toggle}
      className="relative z-9991 flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus:outline-none"
    >
      <span
        className={`h-0.5 bg-[#54BD95] transition-all duration-500 ease-in-out origin-center ${
          props.isOpen ? "w-8 translate-y-1 rotate-45" : "w-8"
        }`}
      />
      <span
        className={`h-0.5 bg-[#54BD95] transition-all duration-500 ease-in-out origin-center ${
          props.isOpen ? "w-8 -translate-y-1 -rotate-45" : "w-5"
        }`}
      />
    </button>
  );
};

export default BurgerMenu;
