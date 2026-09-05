"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

function ContactLink({
  className,
  children,
  onClick,
  ...rest
}: Omit<LinkProps, "href"> & {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...rest}
      href="/contact"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        if (pathname === "/contact") {
          e.preventDefault();
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
    >
      {children}
    </Link>
  );
}

export { ContactLink };