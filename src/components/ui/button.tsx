import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display text-sm font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-pine-900 text-paper shadow-lg shadow-pine-950/25 hover:-translate-y-0.5 hover:bg-pine-950",
        gold: "bg-gold-400 text-pine-950 shadow-lg shadow-gold-500/30 hover:-translate-y-0.5 hover:bg-gold-300",
        outline:
          "border border-pine-900/20 bg-transparent text-pine-900 hover:border-pine-900/40 hover:bg-pine-900/5",
        outlinePaper:
          "border border-paper/25 bg-paper/5 text-paper backdrop-blur-sm hover:border-paper/50 hover:bg-paper/10",
        ghost: "text-pine-900 hover:bg-pine-900/5",
        ghostPaper: "text-paper hover:bg-paper/10",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-13 px-8 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };