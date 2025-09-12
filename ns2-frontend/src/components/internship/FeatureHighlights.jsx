"use client";

import { normalizeImageUrl } from "@/lib/api";
import { useState } from "react";

export default function FeatureHighlights({ initialData }) {
  const [data] = useState(initialData);

  if (!data || !data.is_active) {
    return null;
  }

  const {
    heading,
    subheading,
    primary_button_text,
    primary_button_url,
    secondary_button_text,
    secondary_button_url,
    content_items,
  } = data;

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Features grid */}
        {content_items && (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-12">
            {content_items
              .filter((item) => item.is_active)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center gap-4 hover:shadow-lg transition"
                >
                  {/* Icon */}
                  {item.icon && (
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl mb-4">
                      <img
                        src={normalizeImageUrl(item.icon)}
                        alt={item.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">{item.description}</p>

                  {/* Tags (if any) */}
                  {item.tags && (
                    <ul className="list-disc list-inside text-gray-600 mt-2 text-left">
                      {item.tags.split(",").map((tag, index) => (
                        <li key={index}>{tag.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Text content and CTA Buttons in a slightly lighter dark gradient box below cards */}
        {(heading ||
          subheading ||
          primary_button_text ||
          secondary_button_text) && (
          <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-md flex flex-col items-center gap-4">
            {/* Heading */}
            {heading && (
              <h2 className="text-4xl font-bold text-white">{heading}</h2>
            )}

            {/* Subheading */}
            {subheading && (
              <p className="text-gray-200 max-w-2xl">{subheading}</p>
            )}

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              {primary_button_text && primary_button_url && (
                <a
                  href={primary_button_url}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  {primary_button_text}
                </a>
              )}
              {secondary_button_text && secondary_button_url && (
                <a
                  href={secondary_button_url}
                  className="px-6 py-3 border border-gray-300 text-gray-200 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  {secondary_button_text}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
