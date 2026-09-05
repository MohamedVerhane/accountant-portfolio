"use client";

import { Scale } from "lucide-react";
import { Marquee } from "@/components/motion/marquee";
import { useTranslations } from "@/lib/i18n";

function MarqueeStrip() {
  const { messages } = useTranslations("marquee");

  return (
    <section
      className="border-y border-pine-900/10 bg-paper-deep/70 py-6"
      aria-hidden="true"
    >
      <Marquee>
        {messages.values.map((value) => (
          <span
            key={value}
            className="flex items-center gap-10 pe-10 text-lg font-bold text-pine-800/80"
          >
            {value}
            <Scale className="size-[18px] text-gold-500" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export { MarqueeStrip };