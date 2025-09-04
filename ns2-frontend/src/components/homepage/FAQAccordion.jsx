"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-neutral-800 shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
              {item.answer || "No answer provided yet."}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
