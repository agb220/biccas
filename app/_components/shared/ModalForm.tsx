"use client";
import type { Styles } from "react-modal";
import Modal from "react-modal";
import Button from "../shared/Button";

import { useState } from "react";
import { cn } from "@/app/cn";
import { CloseSvg } from "../_icon";
import LoginForm from "./LoginForm";

interface ModalFormProps {
  isOpen: boolean;
  setIsOpenModal: (arg0: boolean) => void;
  title?: string;
  subTitle?: string;
  sendFormTitle?: string;
  isResultModal: boolean;
  setIsResultModal: (isOpen: boolean) => void;
  success: null | boolean;
  message: string;
  setModalMessage: (arg: string) => void;
  setIsSuccess: (arg: boolean) => void;
}

const ModalForm = (props: ModalFormProps) => {
  const closeModal = () => {
    document.body.style.overflow = "";
    props.setIsOpenModal(false);
  };
  if (props.isOpen) {
    document.body.style.overflow = "hidden";
  }

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
