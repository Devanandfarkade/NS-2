"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinkClient({ href, children, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-[#007BFF] font-semibold" : "text-[#6C757D]"} ${className} hover:text-[#007BFF] transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}
