"use client";

import { cn } from "@/app/cn";
import React, { forwardRef } from "react";

interface ButtonOptions {
  variant?: "light" | "outline" | "link" | "withicon" | "icon";
  active?: boolean;
  icon?: React.ReactElement<any>;
  showIcon?: boolean;
  iconVariant?: "fill" | "stroke";
}

type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & ButtonOptions &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonOptions | "as">;

const ButtonInner = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
  ref: React.Ref<any>
) => {
  const {
    as: Component = "button",
    className,
    variant = "light",
    children,
    icon,
    iconVariant = "stroke",
    ...rest
  } = props;

  const buttonStyles = {
    light:
      "text-[16px] text-[#F8F8FA] rounded-[10px] border-2 border-transparent bg-[#54BD95] hover:text-[#54BD95] hover:bg-transparent hover:border-[#54BD95] py-[10px] px-[10px] shadow-md",
    outline:
      "text-[16px] hover:text-[#F8F8FA] rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#54BD95] text-[#54BD95] py-[11px] px-[10px]",
    link: "text-white hover:text-[#54BD95] transition-colors duration-500",
    icon: "p-1 rounded-lg border-2 border-white/75 hover:border-white text-white/75 hover:text-white focus:shadow-[0px_0px_0px_2px_#223f47]",
    withicon:
      "p-1 rounded-lg border-2 border-white/75 hover:border-white text-white/75 hover:text-white focus:shadow-[0px_0px_0px_2px_#223f47]",
  };

  return (
    <Component
      ref={ref}
      className={cn(
        "focus:ring-none flex items-center justify-center group gap-2 whitespace-nowrap focus:outline-none disabled:active:shadow-none relative transition-colors duration-500",
        buttonStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
      {icon && React.cloneElement(icon)}
    </Component>
  );
};

export const Button = forwardRef(ButtonInner) as <
  T extends React.ElementType = "button"
>(
  props: ButtonProps<T> & { ref?: React.Ref<any> }
) => React.ReactElement;

(Button as any).displayName = "Button";

export default Button;
