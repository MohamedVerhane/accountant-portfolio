import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  dark?: boolean;
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      <span className="inline-flex items-center text-sm font-bold text-gold-600">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-paper" : "text-pine-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-pretty text-base leading-8 sm:text-lg",
            dark ? "text-pine-200" : "text-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export { SectionHeading };