"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinkClient({
  href,
  children,
  className = "",
  onClick,
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses = isActive
    ? "text-[#155dfc] font-semibold"
    : "text-[#6C757D] hover:text-[#155dfc]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className} transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}
