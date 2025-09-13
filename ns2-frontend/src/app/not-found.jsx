"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6 overflow-hidden">
      {/* Top Section */}
      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#007BFF]">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900">
          Oops! This page went on vacation without telling us 🏖️
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Don’t worry, our space team is working hard to bring this page back
          from its intergalactic adventure. In the meantime, why not explore our
          other amazing pages?
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#007BFF] text-white font-medium shadow hover:opacity-95 transition"
          >
            🚀 Take Me Home
          </Link>

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-full border border-[#007BFF] text-[#007BFF] font-medium bg-white hover:bg-gray-50 transition"
          >
            🔙 Go Back
          </button>
        </div>
      </div>

      {/* Fun Facts Card */}
      <div className="mt-12 w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-600 mb-4">
          Fun 404 Facts! 😄
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-blue-50">
            <h4 className="font-semibold text-sm text-gray-600 ">
              🚀 Space Fact
            </h4>
            <p className="text-sm text-gray-700 mt-2">
              A day on Venus is longer than its year! Venus rotates so slowly
              that it takes 243 Earth days to complete one rotation.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50">
            <h4 className="font-semibold text-sm text-gray-600">
              🌍 Earth Fact
            </h4>
            <p className="text-sm text-gray-700 mt-2">
              The Earth’s core is as hot as the Sun’s surface — about 5,700°C
              (10,300°F)!
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50">
            <h4 className="font-semibold text-sm text-gray-600">
              💻 Tech Fact
            </h4>
            <p className="text-sm text-gray-700 mt-2">
              The first “computer bug” was an actual moth found in 1947 inside a
              computer relay.
            </p>
          </div>
        </div>
      </div>

      {/* SVG Planets + Robot */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Planet 1 (orange) */}
        <svg
          className="absolute top-20 left-10 w-20 animate-bounce"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="#FF6B35" />
          <circle cx="35" cy="35" r="8" fill="#FFB347" />
          <circle cx="65" cy="60" r="6" fill="#FFD580" />
        </svg>

        {/* Planet 2 (blue) */}
        <svg
          className="absolute top-40 right-12 w-24 animate-spin-slow"
          viewBox="0 0 120 120"
        >
          <circle cx="60" cy="60" r="50" fill="#007BFF" />
          <circle cx="40" cy="45" r="10" fill="#5ABFFF" />
          <circle cx="75" cy="70" r="12" fill="#A3DFFF" />
        </svg>

        {/* Robot */}
        <svg
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16"
          viewBox="0 0 64 64"
        >
          {/* Head */}
          <rect
            x="16"
            y="8"
            width="32"
            height="20"
            rx="4"
            fill="#E6F0FF"
            stroke="#007BFF"
            strokeWidth="2"
          />
          <circle cx="26" cy="18" r="4" fill="#007BFF" />
          <circle cx="38" cy="18" r="4" fill="#007BFF" />

          {/* Body */}
          <rect
            x="14"
            y="28"
            width="36"
            height="24"
            rx="6"
            fill="#F9FAFB"
            stroke="#007BFF"
            strokeWidth="2"
          />

          {/* Arms */}
          <line
            x1="14"
            y1="32"
            x2="4"
            y2="40"
            stroke="#007BFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="50"
            y1="32"
            x2="60"
            y2="40"
            stroke="#007BFF"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Antenna */}
          <line
            x1="32"
            y1="8"
            x2="32"
            y2="2"
            stroke="#007BFF"
            strokeWidth="2"
          />
          <circle cx="32" cy="1" r="2" fill="#007BFF" />
        </svg>
      </div>
    </main>
  );
}
