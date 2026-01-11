import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RetroWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export function RetroWindow({
  title = "UNTITLED.EXE",
  children,
  className,
  headerClassName,
}: RetroWindowProps) {
  return (
    <div
      className={cn(
        "bg-white border border-black shadow-retro overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-8 border-b border-black flex items-center px-2 bg-white",
          headerClassName
        )}
      >
        <div className="flex gap-1 mr-2">
          <div className="w-3 h-3 border border-black bg-white" />
          <div className="w-3 h-3 border border-black bg-white" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider truncate">
          {title}
        </span>
        <div className="ml-auto flex gap-1">
           <div className="w-3 h-3 border border-black bg-white flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-black" />
           </div>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
