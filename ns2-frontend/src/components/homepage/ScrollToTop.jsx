"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group flex flex-col items-center">
      {/* Tooltip */}
      <span
        className="mb-2 px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md 
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
      >
        Scroll to top
        <span className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-gray-800"></span>
      </span>

      {/* Button */}
      <button
        onClick={scrollToTop}
        className={`relative p-3 rounded-full shadow-lg transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          bg-blue-600 text-white hover:bg-blue-700`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
