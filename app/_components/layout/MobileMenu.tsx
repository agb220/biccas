import Link from "next/dist/client/link";
import Button from "../shared/Button";
import { useAuth } from "@/context/AuthContext";
import { UserSvg } from "../_icon";

interface MobileMenuProps {
  items: any[];
  closeMenu: () => void;
  isMenuOpen: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    props.closeMenu();
  };

  return (
    <div
      className={`fixed inset-0 z-999 overflow-y-auto bg-[#191A15] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] min-h-[99svh] ${
        props.isMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="h-14 md:h-20 shrink-0" />
      <nav className="text-center w-full px-6 border-b border-[#54BD95] mb-6">
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
        {!user ? (
          <>
            <Link
              href="/login"
              onClick={props.closeMenu}
              className="text-[24px] text-white font-medium py-2 hover:text-[#54BD95] transition-colors"
            >
              Login
            </Link>
            <Button
              as="a"
              href="/sign-up"
              onClick={props.closeMenu}
              className="w-full h-14 text-lg"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-8">
            <Link
              href="/account"
              onClick={props.closeMenu}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#54BD95]/10 border border-[#54BD95]/30 flex items-center justify-center">
                <UserSvg className="w-10 h-10 text-[#54BD95]" />
              </div>
              <span className="text-[24px] font-medium text-white group-hover:text-[#54BD95] transition-colors">
                My Account
              </span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-[20px] font-medium text-white/50 hover:text-red-400 transition-colors pt-4 border-t border-white/5 w-full"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
