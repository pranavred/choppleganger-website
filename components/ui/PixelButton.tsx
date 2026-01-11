import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function PixelButton({
  children,
  className,
  variant = "primary",
  ...props
}: PixelButtonProps) {
  const variants = {
    primary: "bg-tavus-pink text-black hover:bg-tavus-pink-hover",
    secondary: "bg-tavus-beige text-black hover:bg-white",
    outline: "bg-transparent text-black hover:bg-tavus-pink",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 font-mono text-sm uppercase tracking-widest border border-black transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        "shadow-retro hover:shadow-retro-hover hover:translate-x-[2px] hover:translate-y-[2px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
