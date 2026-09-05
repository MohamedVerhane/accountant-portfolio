"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = React.useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "divide-y divide-pine-900/10 overflow-hidden rounded-3xl border border-pine-900/10 bg-white/60 shadow-xl shadow-pine-950/5 backdrop-blur-sm",
        className
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={`faq-trigger-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-start transition-colors hover:bg-pine-50/60 sm:px-8"
            >
              <span className="font-display text-base font-bold text-pine-950 sm:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  isOpen
                    ? "bg-gold-400 text-pine-950"
                    : "bg-pine-100 text-pine-800"
                )}
              >
                {isOpen ? (
                  <Minus className="size-4" />
                ) : (
                  <Plus className="size-4" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    ease: EASE,
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[15px] leading-8 text-ink/75 sm:px-8 sm:pe-20">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export { Accordion };