"use client";

import * as React from "react";

function ScrollToSection({ section }: { section: string }) {
  React.useEffect(() => {
    let cancelled = false;

    const scroll = () => {
      if (cancelled) return;
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    const frame = requestAnimationFrame(scroll);
    const off = setTimeout(scroll, 250);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(off);
    };
  }, [section]);

  return null;
}

export { ScrollToSection };