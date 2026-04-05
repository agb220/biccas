import Link from "next/dist/client/link";
import Button from "../shared/Button";

interface MobileMenuProps {
  items: any[];
  closeMenu: () => void;
  isMenuOpen: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-999 overflow-y-auto bg-[#191A15] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] min-h-[99svh] ${
        props.isMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="h-14 md:h-20 shrink-0" />
      <nav className="text-center w-full px-6 border-b border-[#54BD95]">
        <ul className="flex flex-col gap-3 py-4">
          {props.items.map((menu, index) => (
            <li key={index} className="py-4">
              <Link
                href={menu.href}
                onClick={props.closeMenu}
                className="text-[24px] font-medium relative  text-[#54BD95] "
              >
                {menu.item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-between gap-3">
        <a
          href="/login"
          className="text-[26px] text-[#54BD95] font-medium py-4"
        >
          Login
        </a>
        <Button as="a" href="/sign-up">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
