import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

function Marquee({ children, className, innerClassName }: MarqueeProps) {
  return (
    <div
      className={cn(
        "mask-fade-x flex w-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee items-center gap-10 pe-10",
          innerClassName
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export { Marquee };