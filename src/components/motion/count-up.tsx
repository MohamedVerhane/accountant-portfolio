"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const final = prefix + to.toLocaleString("en-US") + suffix;

  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent =
            prefix + Math.round(value).toLocaleString("en-US") + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, prefix, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true" dir="ltr" className={className}>
        {final}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
}

export { CountUp };