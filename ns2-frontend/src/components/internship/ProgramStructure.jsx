"use client";

import { normalizeImageUrl } from "@/lib/api";
import { useState } from "react";

export default function ProgramStructure({ initialData }) {
  const [data] = useState(initialData);

  if (!data || !data.is_active) return null;

  const {
    heading,
    subheading,
    primary_image,
    overlay_description,
    content_items,
  } = data;

  const overlayItems = overlay_description
    ? overlay_description.split(",").map((item) => item.trim())
    : [];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading & Subheading */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {primary_image && (
          <img
            src={normalizeImageUrl(primary_image)}
            alt={heading}
            className="mx-auto mb-6 w-full max-w-xl object-contain"
          />
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {heading}
        </h2>
        {subheading && (
          <p className="text-gray-700 text-lg sm:text-xl mb-8">{subheading}</p>
        )}

        {/* Overlay description as separate boxes */}
        {overlayItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {overlayItems.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white shadow-md rounded-lg text-sm font-medium text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {content_items
          .filter((step) => step.is_active)
          .map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-start gap-4 hover:shadow-xl transition"
            >
              {step.icon && (
                <img
                  src={normalizeImageUrl(step.icon)}
                  alt={step.title}
                  className="w-16 h-16 object-contain"
                />
              )}
              <div>
                <span className="text-sm font-semibold text-indigo-600">
                  {step.label}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2">{step.description}</p>

                {/* Tags */}
                {step.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {step.tags.split(",").map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
