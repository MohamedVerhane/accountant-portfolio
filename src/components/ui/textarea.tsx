import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full rounded-2xl border border-pine-900/15 bg-white/70 px-4 py-3 text-[15px] text-ink outline-none transition-all placeholder:text-ink/40 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };