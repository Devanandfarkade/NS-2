"use client";

import Link from "next/link";
import { useState } from "react";

export default function LogoClient({ logoUrl }) {
  const [imageError, setImageError] = useState(false);

  if (!logoUrl || imageError) {
    return (
      <Link href="/" className="flex items-center">
        <div className="h-10 w-32 bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600 rounded-md">
          Company Logo
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center">
      <img
        src={logoUrl}
        alt="Company Logo"
        className="h-10 w-auto"
        onError={() => {
          console.error("Failed to load logo:", logoUrl);
          setImageError(true);
        }}
      />
    </Link>
  );
}
