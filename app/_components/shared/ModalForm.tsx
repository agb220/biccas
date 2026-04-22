"use client";
import type { Styles } from "react-modal";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import Button from "../shared/Button";
import LoginForm from "./LoginForm";
import { cn } from "@/app/cn";
import { CloseSvg } from "../_icon";

interface ModalFormProps {
  isOpen: boolean;
  setIsOpenModal: (arg0: boolean) => void;
}

const ModalForm = (props: ModalFormProps) => {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();

  const closeModal = () => {
    document.body.style.overflow = "";
    props.setIsOpenModal(false);
  };
  if (props.isOpen) {
    document.body.style.overflow = "hidden";
  }

  if (props.isOpen) {
    document.body.style.overflow = "hidden";
  }

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
      closeModal();
      router.push("/account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      style={modalStyles}
      className="modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
    >
      <div className="relative box-border max-w-166 md:min-w-166">
        <Button
          onClick={closeModal}
          className={cn(
            "absolute right-6  top-6 z-10 cursor-pointer! h-12 w-14 md:h-12 md:w-12"
          )}
        >
          <CloseSvg className="size-3 stroke-white" />
        </Button>
        <div className="relative px-6 py-10">
          <h3 className="text-2xl md:text-4xl mb-6 text-white text-center">
            Log in
          </h3>
          <p className="text-xl md:text-2xl mb-14 md:mb-6 text-white">
            Log in to view your account information
          </p>
          <LoginForm
            onSuccess={() => {
              closeModal();
            }}
          />
          <div className="relative my-8 text-center">
            <span className="relative px-4  text-white/40 text-sm uppercase">
              or
            </span>
          </div>

          <Button
            onClick={handleGoogleClick}
            className="w-full rounded-[10px]"
            variant="outline"
          >
            Continue with Google
          </Button>
          <div className="mt-6 text-center">
            <p className="text-white/60">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                onClick={handleGoogleClick}
                className="text-[#54BD95] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const modalStyles: Styles = {
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 9999999,
    background: "rgba(6,26,31,0.80)",
  },
  content: {
    inset: 0,
    outline: "none",
  },
};

export default ModalForm;
