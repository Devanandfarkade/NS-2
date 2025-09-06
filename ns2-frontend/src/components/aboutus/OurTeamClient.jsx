// components/aboutus/OurTeamClient.jsx
"use client";

import { motion } from "framer-motion";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function OurTeamClient({ data }) {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-indigo-300 rounded-full opacity-20"></div>

        <svg
          className="absolute top-1/4 right-1/4 w-24 h-24 text-blue-300 opacity-40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="90"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        {data.super_heading && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm"
          >
            {data.super_heading}
          </motion.span>
        )}

        {data.heading && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          >
            {data.heading}{" "}
            {data.subheading && (
              <span className="text-blue-600">{data.subheading}</span>
            )}
          </motion.h2>
        )}

        {data.overview_text && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
          >
            {data.overview_text}
          </motion.p>
        )}

        {/* Team Grid */}
        {data.content_items?.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-10 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {data.content_items.map((member, idx) => {
              const imageUrl = member.image?.startsWith("http")
                ? member.image
                : `${API_BASE_URL}${member.image}`;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-27px)] lg:w-[calc(25%-30px)] xl:w-[calc(20%-32px)] max-w-xs"
                  whileHover={{ y: -5 }}
                >
                  {/* Banner strip */}
                  <div
                    className="relative h-40 w-full bg-gradient-to-r from-blue-500/70 to-indigo-600/70 backdrop-blur-sm"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(8px)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-indigo-600/40"></div>
                  </div>

                  {/* Profile Image */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                    <motion.img
                      src={imageUrl}
                      alt={member.label}
                      className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover group-hover:scale-105 transition duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="pt-24 pb-8 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.label}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mt-1">
                      {member.title}
                    </p>
                    {member.description && (
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
