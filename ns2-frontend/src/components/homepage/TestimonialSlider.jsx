"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const AUTOPLAY_INTERVAL = 4000;

function normalizeUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function TestimonialSlider({ items = [], heading, subheading }) {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const total = items.length;

  useEffect(() => {
    if (!isHovering && total > 0) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, AUTOPLAY_INTERVAL);
    }
    return () => clearInterval(autoplayRef.current);
  }, [total, isHovering]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    resetAutoplay();
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);
  };

  const getPosition = (idx) => {
    if (idx === current) return "center";
    if (idx === (current - 1 + total) % total) return "left";
    if (idx === (current + 1) % total) return "right";
    return "hidden";
  };

  if (items.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="text-center py-20 bg-gray-50 rounded-2xl">
          <p className="text-gray-500 text-lg">No testimonials available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto pt-12 md:pt-16 pb-0 md:pb-1 px-4">
      {(heading || subheading) && (
        <div className="text-center mb-8 relative">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
          )}
          <div className="hidden md:block absolute -left-24 top-full mt-2 z-20">
            <svg
              width="100"
              height="80"
              viewBox="0 0 100 80"
              className="text-black"
            >
              <path
                d="M95,40 C60,40 40,40 40,40 C35,40 35,50 30,55 C25,60 25,65 25,70"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon points="20,70 30,65 25,75" fill="currentColor" />
            </svg>
          </div>
          <div className="hidden md:block absolute -right-24 top-full mt-2 z-20">
            <svg
              width="100"
              height="80"
              viewBox="0 0 100 80"
              className="text-black"
            >
              <path
                d="M5,40 C40,40 60,40 60,40 C65,40 65,50 70,55 C75,60 75,65 75,70"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon points="80,70 70,65 75,75" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-lg rounded-full hover:bg-blue-50 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-lg rounded-full hover:bg-blue-50 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex justify-center items-start relative h-[320px] sm:h-[340px] md:h-[360px]">
          {items.map((item, idx) => {
            const pos = getPosition(idx);
            return (
              <div
                key={idx}
                className={`
          absolute transition-all duration-500 ease-in-out
          w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px]
          ${pos === "center" ? "z-20 opacity-100 translate-x-0 scale-100" : ""}
          ${
            pos === "left"
              ? "z-10 -translate-x-[110%] opacity-70 scale-95 blur-[1px]"
              : ""
          }
          ${
            pos === "right"
              ? "z-10 translate-x-[110%] opacity-70 scale-95 blur-[1px]"
              : ""
          }
          ${pos === "hidden" ? "opacity-0 pointer-events-none scale-90" : ""}
        `}
              >
                <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg border border-gray-100 relative mx-auto h-auto min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">
                  <Quote className="absolute top-5 right-5 w-6 h-6 sm:w-8 sm:h-8 text-blue-100" />
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-blue-100 border-2 border-white shadow-sm flex-shrink-0">
                      {item?.icon ? (
                        <Image
                          src={normalizeUrl(item.icon)}
                          alt={item?.title || "user"}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-base sm:text-lg font-semibold text-gray-600">
                            {item?.title?.charAt(0) || "U"}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                        {item?.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {item?.label}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              resetAutoplay();
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              idx === current ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
