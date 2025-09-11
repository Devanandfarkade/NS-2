"use client";

import { normalizeImageUrl } from "@/lib/api"; // adjust import path if needed
import { useState } from "react";

export default function InternshipOpportunities({ initialData }) {
  const [data] = useState(initialData); // use only SSR data

  if (!data) {
    return <div className="p-10 text-center">No internship data found.</div>;
  }

  return (
    <section className="py-16 bg-white relative">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {data.heading}
        </h2>
        <p className="text-gray-600">{data.subheading}</p>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {data.content_items?.map((item) => {
          const iconUrl = normalizeImageUrl(item.icon);
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
            >
              {/* Icon */}
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt={item.title}
                  className="w-12 h-12 mb-4 object-contain"
                />
              ) : (
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  <span className="text-xl">★</span>
                </div>
              )}

              {/* Title + Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>

              {/* Button */}
              {item.primary_button_text && (
                <a
                  href={item.primary_button_url || "#"}
                  className="mt-auto text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
                >
                  {item.primary_button_text} <span className="text-lg">↗</span>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
