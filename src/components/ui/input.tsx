import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-2xl border border-pine-900/15 bg-white/70 px-4 py-2 text-[15px] text-ink outline-none transition-all placeholder:text-ink/40 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };