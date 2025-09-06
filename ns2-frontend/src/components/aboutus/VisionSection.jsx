"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Lightbulb, BarChart3 } from "lucide-react";

export default function VisionSection({ data }) {
  if (!data || !Array.isArray(data.content_items)) return null;

  const [activeTab, setActiveTab] = useState(data.content_items[0]?.label);
  const activeContent = data.content_items.find(
    (item) => item.label === activeTab
  );

  return (
    <section className="relative w-full py-11 overflow-hidden  bg-[linear-gradient(135deg,#E2E8F0,#F8FAFC)]">
      {/* 🎨 Creative Doodle Background */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* ⭐ Corner Stars */}
        <svg
          className="absolute top-10 left-50 w-8 h-8 text-blue-300 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2l2.39 6.96H22l-5.45 3.96L18.94 20 12 15.9 5.06 20l2.39-7.08L2 8.96h7.61z"
          />
        </svg>
        <svg
          className="absolute bottom-6 right-6 w-6 h-6 text-yellow-400 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2l2.39 6.96H22l-5.45 3.96L18.94 20 12 15.9 5.06 20l2.39-7.08L2 8.96h7.61z"
          />
        </svg>

        {/* 🔵 Bubbles */}
        <div className="absolute top-1/3 left-12 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/8 right-20 w-8 h-8 bg-pink-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/4 right-250 text-blue-500 opacity-30 z-0">
          <Lightbulb size={48} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-1/3 left-16 text-blue-400 opacity-30 z-0">
          <Laptop size={52} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-28 right-20 text-blue-500 opacity-30 z-0">
          <BarChart3 size={50} strokeWidth={1.5} />
        </div>
        {/* ⚡ Zigzag */}
        <svg
          className="absolute bottom-20 left-1/4 w-28 h-10 text-indigo-400 opacity-50"
          viewBox="0 0 100 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15 L20 5 L40 15 L60 5 L80 15 L100 5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* ➰ Curved Arrow */}
        <svg
          className="absolute top-1/2 right-16 w-20 h-20 text-purple-400 opacity-50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 30 Q 25 5, 45 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M35 25 L45 30 L40 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* ⭕ Dotted Circle */}
        <div className="absolute top-1/4 left-1/6 w-10 h-10 border-2 border-dotted border-blue-300 rounded-full opacity-40"></div>

        {/* 🟣 Blob */}
        <svg
          className="absolute bottom-16 right-1/4 w-32 h-32 text-yellow-300 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.8,-62.1C56.2,-53.9,63.8,-39.3,70.5,-23.3C77.1,-7.2,82.8,10.3,77.8,25.5C72.9,40.8,57.4,53.8,41,63.8C24.7,73.7,7.3,80.6,-10.4,83.1C-28,85.5,-56.1,83.5,-70.3,68.3C-84.5,53.1,-84.7,24.5,-79.3,1C-73.9,-22.5,-62.9,-45,-46.8,-53.7C-30.7,-62.4,-15.4,-57.4,0.7,-58.3C16.9,-59.1,33.8,-66.2,44.8,-62.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        {data.section_type && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900"
          >
            {data.section_type.replace(/_/g, " ")}
          </motion.h2>
        )}

        {/* Heading */}
        {data.heading && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            {data.heading}
          </motion.p>
        )}

        {/* Tabs */}
        <div className="flex justify-center mt-8 space-x-4">
          {data.content_items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.label)}
              className={`px-4 py-2 rounded-lg font-medium shadow transition ${
                activeTab === item.label
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeContent && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-0"
            key={activeContent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Content */}
            <div className="flex-1 ml-0 lg:ml-40 mt-10 ">
              {activeContent.label && (
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {activeContent.label}
                </h3>
              )}
              {activeContent.description && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {activeContent.description}
                </p>
              )}
            </div>

            {/* Right Image */}
            {activeContent.image && (
              <motion.div
                className="flex justify-center items-center bg-transparent p-9 mt-0 h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={activeContent.image}
                  alt={activeContent.label || "Vision"}
                  className="w-full h-full object-cover bg-transparent overflow-hidden rounded-[10px] lg:m-[58px]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
