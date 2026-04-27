"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import Button from "../shared/Button";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import ModalForm from "../shared/ModalForm";
import { useAuth } from "@/context/AuthContext";
import { menulist } from "../_constants/constants";
import { UserSvg } from "../_icon";
import { cn } from "@/app/cn";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80) {
          setIsDarkBg(true);
        } else {
          setIsDarkBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isDarkBg ? "text-white" : "";

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname !== "/") {
      e.preventDefault();

      window.location.href = href;
      return;
    }

    if (pathname === "/") {
      e.preventDefault();

      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header className="py-5 md:py-10 fixed top-0 left-0 right-0 backdrop-blur-2xl z-100">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="max-w-20 max-h-5 md:max-w-40 md:max-h-7.5"
            >
              <Image
                src={"/images/logo.svg"}
                alt={"Biccas logo"}
                width={100}
                height={40}
                className="object-center"
              />
            </Link>
            <div className="gap-32 items-center justify-between hidden lg:flex">
              <nav>
                <ul className="flex gap-10 items-center justify-between">
                  {menulist.map((menu, index) => (
                    <li
                      key={index}
                      className={cn(
                        "text-[18px] font-medium relative pb-1 hover:text-[#54BD95] transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#54BD95] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out",
                        textColor
                      )}
                    >
                      <Link
                        href={menu.href}
                        onClick={(e) => handleScroll(e, menu.href)}
                      >
                        {menu.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center justify-end gap-5 min-w-50">
                {loading ? (
                  <div className="flex items-center gap-6 animate-pulse">
                    <div className="h-5 w-12 bg-white/10 rounded-md"></div>
                    <div className="h-12 w-28 bg-white/10 rounded-xl"></div>
                  </div>
                ) : !user ? (
                  <div className="flex items-center gap-5 animate-in fade-in duration-500">
                    <button
                      className={cn(
                        "text-[18px] font-medium relative pb-1 hover:text-[#54BD95] transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#54BD95] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out",
                        textColor
                      )}
                      onClick={() => setIsLoginOpen(true)}
                    >
                      Login
                    </button>
                    <Button as="a" href="/sign-up">
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-6 animate-in fade-in zoom-in-95 duration-500">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 text-[18px] font-medium hover:text-[#54BD95] transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#54BD95]/10 transition-colors">
                        <UserSvg className={(cn("size-6 "), textColor)} />
                      </div>
                    </Link>
                    <button
                      onClick={logout}
                      className={cn(
                        "text-[18px] font-medium  hover:text-red-400 transition-colors duration-300",
                        textColor
                      )}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:hidden">
              <BurgerMenu
                isOpen={isMenuOpen}
                toggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <MobileMenu
            items={menulist}
            closeMenu={() => setIsMenuOpen(false)}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </header>
      {isLoginOpen && (
        <ModalForm isOpen={isLoginOpen} setIsOpenModal={setIsLoginOpen} />
      )}
    </>
  );
};

export default Header;
