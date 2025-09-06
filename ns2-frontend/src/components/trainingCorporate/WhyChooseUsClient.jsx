"use client";

import React from "react";
import { normalizeImageUrl } from "@/lib/api";

export default function WhyChooseUsClient({ data }) {
  const items = (data?.content_items || [])
    .slice()
    .sort((a, b) => a.order - b.order);

  return (
    <section className="py-16 bg-[#F8F9FA] dark:bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-gray-900">
            {data?.heading || "Why Choose Our Corporate Training?"}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6C757D] dark:text-[#6C757D] max-w-2xl mx-auto">
            {data?.subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const iconUrl = normalizeImageUrl(item.icon);
            return (
              <div
                key={item.id}
                className="bg-[#F8F9FA] dark:bg-[#F8F9FA] rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#007BFF]">
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={item.title || ""}
                          className="w-6 h-6"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-[#F8F9FA] rounded" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#6C757D] dark:text-[#6C757D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
