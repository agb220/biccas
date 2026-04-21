"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import Button from "../shared/Button";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import ModalForm from "../shared/ModalForm";
import { useAuth } from "@/context/AuthContext";
import { menulist } from "../_constants/constants";
import { UserSvg } from "../_icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, logout } = useAuth();

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
                      className="text-[18px] font-medium relative pb-1 hover:text-[#54BD95] transition-colors duration-500
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-0.5 after:w-full after:bg-[#54BD95] 
                         after:scale-x-0 after:origin-center 
                         hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
                    >
                      <Link href={`${menu.href}`}>{menu.item}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center justify-between gap-5">
                {!user ? (
                  <>
                    <button
                      className="text-[18px] font-medium relative pb-1 hover:text-[#54BD95] transition-colors duration-500
                             after:content-[''] after:absolute after:left-0 after:bottom-0 
                             after:h-0.5 after:w-full after:bg-[#54BD95] 
                             after:scale-x-0 after:origin-center 
                             hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
                      onClick={() => setIsLoginOpen(true)}
                    >
                      Login
                    </button>
                    <Button as="a" href="/sign-up">
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center gap-6">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 text-[18px] font-medium hover:text-[#54BD95] transition-colors duration-300"
                    >
                      <UserSvg />
                    </Link>
                    <button
                      onClick={logout}
                      className="text-[18px] font-medium text-gray-400 hover:text-red-400 transition-colors duration-300"
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
        <ModalForm
          isOpen={isLoginOpen}
          setIsOpenModal={setIsLoginOpen}
          isResultModal={false}
          setIsResultModal={function (isOpen: boolean): void {
            throw new Error("Function not implemented.");
          }}
          success={null}
          message={""}
          setModalMessage={function (arg: string): void {
            throw new Error("Function not implemented.");
          }}
          setIsSuccess={function (arg: boolean): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </>
  );
};

export default Header;
