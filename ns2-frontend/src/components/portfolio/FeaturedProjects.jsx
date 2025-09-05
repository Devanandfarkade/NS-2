'use client';

import { useEffect, useState } from 'react';

// Helper component for the section heading
const SectionHeader = ({ superHeading, heading, subheading }) => (
  <div className="text-center max-w-3xl mx-auto px-4 mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-poppins">
      {superHeading}{' '}
      <span className="text-blue-600">{heading}</span>
    </h2>
    {subheading && (
      <p className="mt-4 text-lg text-gray-500 font-opensans">
        {subheading}
      </p>
    )}
  </div>
);

export const FeaturedProjectsSection = ({ data = {} }) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const contentItems = data.content_items || [];

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // On current change, trigger animation
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [current]); 

  // Auto slide every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === contentItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? contentItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === contentItems.length - 1 ? 0 : prev + 1));
  };

  if (contentItems.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader
          superHeading={data.super_heading}
          heading={data.heading}
          subheading={data.subheading}
        />

        <div className="relative flex flex-col items-center justify-center gap-8">
          <div
            className={`flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl w-full transform transition duration-500 ease-in-out
            ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
                {contentItems[current].label}
              </h3>
              <p className="text-gray-600 font-opensans mb-4">
                {contentItems[current].title}
              </p>

              {/* Tags from description */}
              <div className="flex flex-wrap gap-2 mb-4">
                {contentItems[current].description?.split(',').map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>

              {/* Placeholder client info and buttons */}
              <p className="text-sm text-gray-500 mb-4">
                Client: <span className="text-blue-600 font-semibold">RetailCorp</span>
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                  View Live
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition">
                  Case Study
                </button>
              </div>
            </div>

            {/* Right: Image or Placeholder */}
            <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center relative min-h-[280px] md:min-h-[350px]">
              {contentItems[current].icon ? (
                <img
                  src={`${API_BASE_URL}${contentItems[current].icon}`}
                  alt={contentItems[current].label}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="text-white text-xl font-semibold px-4 text-center">
                  {contentItems[current].label}
                </div>
              )}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4 mt-6">
                <div className="flex gap-4 mt-6">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
                    aria-label="Previous Slide"
                >
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
                    aria-label="Next Slide"
                >
                    →
                </button>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};
