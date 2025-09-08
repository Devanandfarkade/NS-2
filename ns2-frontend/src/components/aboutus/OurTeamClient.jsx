"use client";

import { motion } from "framer-motion";
import { normalizeImageUrl } from "@/lib/api";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function OurTeamClient({ data }) {
  if (!data?.content_items?.length) return null;

  const items = data.content_items;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading + Subheading */}
        <div className="text-center mb-12">
          {data.heading && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              {data.heading}{" "}
              {data.subheading && (
                <span className="text-blue-600">{data.subheading}</span>
              )}
            </h2>
          )}
          {data.overview_text && (
            <p className="mt-4 text-sm sm:text-base text-[#6C757D] max-w-2xl mx-auto">
              {data.overview_text}
            </p>
          )}
        </div>

        {/* Team Grid */}
        <motion.div
          className="flex flex-wrap justify-center -mx-2 sm:gap-8 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {items.map((item, index) => {
            const imageUrl = item.image?.startsWith("http")
              ? item.image
              : `${API_BASE_URL}${item.image}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  relative bg-white rounded-2xl shadow-md hover:shadow-lg
                  transition-all duration-500 overflow-hidden group
                  w-1/2 px-2               /* Mobile: 2 per row with horizontal padding */
                  sm:w-[calc(50%-20px)]    /* Tablet */
                  md:w-[calc(33.333%-27px)]/* Desktop: 3 per row */
                  lg:w-[calc(25%-30px)]    /* Large screens: 4 per row */
                  xl:w-[calc(20%-32px)]    /* Extra large: 5 per row */
                  flex flex-col items-center text-center
                "
                whileHover={{ y: -5 }}
              >
                {/* Profile Image */}
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.label}
                    className="w-24 h-24 object-cover rounded-lg shadow-md mt-4"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mt-4" />
                )}

                {/* Name */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.label}
                </h3>

                {/* Title */}
                <p className="mt-1 text-sm font-medium text-[#007BFF]">
                  {item.title}
                </p>

                {/* Description */}
                {item.description && (
                  <p className="mt-3 text-sm text-[#6C757D] leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Social Links */}
                <div className="mt-4 flex gap-3">
                  {item.linkedin_url && (
                    <a
                      href={item.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow hover:bg-[#007BFF] hover:text-white transition"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  )}
                  {item.twitter_url && (
                    <a
                      href={item.twitter_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow hover:bg-[#007BFF] hover:text-white transition"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                  )}
                  {item.other_social_url && (
                    <a
                      href={item.other_social_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow hover:bg-[#007BFF] hover:text-white transition"
                    >
                      <FaGlobe className="text-lg" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
