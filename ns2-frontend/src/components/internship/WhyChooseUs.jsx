"use client";

import { normalizeImageUrl } from "@/lib/api";
import { useState } from "react";

export default function WhyChooseUs({ initialData }) {
  const [data] = useState(initialData);

  if (!data || !data.is_active) {
    return null;
  }

  const {
    super_heading,
    heading,
    highlighted_heading,
    subheading,
    content_items,
  } = data;

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Super heading */}
        {super_heading && (
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            {super_heading}
          </span>
        )}

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          {heading}{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {highlighted_heading}
          </span>
        </h2>

        {/* Subheading */}
        {subheading && (
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {subheading}
          </p>
        )}

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {content_items &&
            content_items
              .filter((item) => item.is_active)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md text-left flex flex-col gap-4 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon from backend */}
                    {item.icon && (
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shrink-0">
                        <img
                          src={normalizeImageUrl(item.icon)}
                          alt={item.title}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags as bullet points */}
                  {item.tags && (
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {item.tags.split(",").map((tag, index) => (
                        <li key={index}>{tag.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
