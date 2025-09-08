"use client";

import { motion } from "framer-motion";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function OurTeamClient({ data }) {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-indigo-300 rounded-full opacity-20"></div>
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
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-900"
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
            className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
          >
            {data.overview_text}
          </motion.p>
        )}

        {/* Team Grid */}
        {data.content_items?.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center mt-12 sm:mt-16 -mx-2 sm:gap-8 gap-y-4"
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
                  className="
                    relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl
                    transition-all duration-500 overflow-hidden group
                    w-1/2                       /* Mobile: 2 per row */
                    sm:w-[calc(50%-20px)]        /* Tablet */
                    md:w-[calc(33.333%-27px)]    /* Desktop: 3 per row */
                    lg:w-[calc(25%-30px)]        /* Large screens: 4 per row */
                    xl:w-[calc(20%-32px)]        /* Extra large: 5 per row */
                    px-2                          /* Horizontal padding for mobile */
                  "
                  whileHover={{ y: -5 }}
                >
                  {/* Banner strip */}
                  <div className="relative h-20 sm:h-28 md:h-36 w-full bg-gradient-to-r from-blue-100 to-indigo-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200/60 to-indigo-200/60"></div>
                  </div>

                  {/* Profile Image */}
                  <div className="absolute top-10 sm:top-14 left-1/2 transform -translate-x-1/2">
                    <motion.img
                      src={imageUrl}
                      alt={member.label}
                      className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-3 sm:border-4 border-white shadow-lg object-cover group-hover:scale-105 transition duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="pt-16 sm:pt-20 pb-4 sm:pb-6 px-2 sm:px-4 text-center">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                      {member.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-600 font-medium mt-1">
                      {member.title}
                    </p>
                    {member.description && (
                      <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed">
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
