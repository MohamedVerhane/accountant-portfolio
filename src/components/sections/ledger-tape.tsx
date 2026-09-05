"use client";

import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/motion/marquee";
import { useTranslations } from "@/lib/i18n";

function LedgerTape() {
  const { messages } = useTranslations("ledger");

  return (
    <section
      className="relative overflow-hidden border-y border-paper/10 bg-pine-950 py-5"
      aria-hidden="true"
    >
      <div className="bg-hero-grid absolute inset-0 opacity-30" />
      <div className="relative">
        <Marquee>
          {messages.entries.map((entry) => (
            <span
              key={entry.type + entry.amount}
              className="flex items-center gap-3 whitespace-nowrap text-[13.5px] font-semibold"
            >
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-extrabold ring-1",
                  entry.type === "debit"
                    ? "bg-emerald-400/10 text-emerald-300 ring-emerald-400/25"
                    : "bg-gold-400/10 text-gold-300 ring-gold-400/25"
                )}
              >
                {entry.side}
              </span>
              <span className="font-display text-[15px] font-extrabold tracking-tight text-paper">
                {entry.amount}
              </span>
              <span className="text-pine-300">{entry.label}</span>
              <Scale className="size-3.5 text-pine-600" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export { LedgerTape };