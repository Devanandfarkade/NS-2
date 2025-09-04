"use client";

import { useEffect, useRef } from "react";

export const TrustedCompaniesSection = ({ data = {} }) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const contentItems = data.content_items || [];

  const scrollRef = useRef(null);

  // Duplicate content for seamless looping
  const doubledItems = [...contentItems, ...contentItems];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scrollSpeed = 0.7; // Increase for faster scroll

    const step = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset scroll to start once halfway through duplicated content
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-poppins">
          {data.super_heading}{" "}
          <span className="text-blue-600">{data.heading}</span>
        </h2>

        {/* Subheading */}
        {data.subheading && (
          <p className="mt-3 text-gray-600 font-opensans text-base md:text-lg max-w-2xl mx-auto">
            {data.subheading}
          </p>
        )}

        {/* Scrolling Logos */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-hidden whitespace-nowrap select-none"
          style={{
            pointerEvents: "none", // Disable mouse interaction
            userSelect: "none",
          }}
        >
          {doubledItems.map((item, index) => (
            <div
              key={index}
              className="inline-block bg-gray-50 rounded-lg p-3 shadow-md mx-2"
              style={{
                minWidth: "100px",
                pointerEvents: "none",
              }}
            >
              {item.icon ? (
                <img
                  src={`${API_BASE_URL}${item.icon}`}
                  alt={`Client ${index + 1}`}
                  className="h-10 w-auto md:h-12 object-contain"
                  draggable={false}
                />
              ) : (
                <div className="h-10 w-24 bg-gray-200 rounded" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
