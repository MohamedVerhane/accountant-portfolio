"use client";

import { Award, Building2, ShieldCheck, Wallet } from "lucide-react";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";

function Stats() {
  const { messages } = useTranslations("stats");

  const stats = [
    { icon: Award, value: 11, suffix: " +", label: messages.labels[0] },
    { icon: Building2, value: 170, suffix: " +", label: messages.labels[1] },
    { icon: ShieldCheck, value: 0, suffix: "", label: messages.labels[2] },
    { icon: Wallet, value: 135, prefix: "$", suffix: " M +", label: messages.labels[3] },
  ];

  return (
    <section className="relative overflow-hidden bg-pine-950 py-20 sm:py-24">
      <div
        className="bg-hero-grid absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 start-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(211 179 106 / 0.18), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 divide-paper/10 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-6 py-8 text-center lg:py-4"
                >
                  <Icon className="size-6 text-gold-400" />
                  <p className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <CountUp to={stat.value} prefix={stat.prefix} className="text-paper" />
                    <span className="text-gradient-gold">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-[13.5px] font-semibold text-pine-300">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { Stats };