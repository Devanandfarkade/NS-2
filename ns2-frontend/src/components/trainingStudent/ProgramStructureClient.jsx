"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function ProgramStructureClient({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const [activeTab, setActiveTab] = useState(data[0].primary_button_text);
  const activeSection = data.find(
    (section) => section.primary_button_text === activeTab
  );

  return (
    <section className="relative w-full py-12 bg-[linear-gradient(135deg,#E2E8F0,#F8FAFC)]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Super Heading */}
        {activeSection?.super_heading && (
          <p className="text-center text-sm font-semibold text-blue-600">
            {activeSection.super_heading}
          </p>
        )}

        {/* Main Heading */}
        {activeSection?.heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-2">
            {activeSection.heading}
          </h2>
        )}

        {/* Highlighted Heading */}
        {activeSection?.highlighted_heading && (
          <p className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            {activeSection.highlighted_heading}
          </p>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap  justify-center mt-8 gap-2">
          {data.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.primary_button_text)}
              className={`px-5 py-2 rounded-lg font-medium shadow transition text-sm sm:text-base ${
                activeTab === section.primary_button_text
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {section.primary_button_text}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeSection && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-white p-6 md:p-8  rounded-2xl shadow-lg"
          >
            {/* Top Info Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {activeSection.overlay_title}
                </h3>
                <p className="text-gray-600">
                  {activeSection.overlay_description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSection.secondary_button_text && (
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {activeSection.secondary_button_text}
                  </span>
                )}
                {activeSection.subheading && (
                  <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {activeSection.subheading}
                  </span>
                )}
              </div>
            </div>

            {/* Course List */}
            <div className="mt-6 space-y-4">
              {activeSection.content_items?.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 bg-[linear-gradient(135deg,#E2E8F0,#F8FAFC)] rounded-xl shadow hover:shadow-md transition"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Course Info */}
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {course.label}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {course.title}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  {course.description && (
                    <div className="mt-3 sm:mt-0 text-sm text-gray-500 text-left sm:text-right">
                      <span className="flex items-center gap-1 text-blue-600 font-medium">
                        <Clock size={16} />
                        {course.description}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
