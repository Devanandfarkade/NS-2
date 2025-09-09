"use client";

import { motion } from "framer-motion";

export default function TrainingProcessClient({ data }) {
  const items = (data?.content_items || [])
    .filter((item) => item.is_active) // only show active
    .sort((a, b) => a.order - b.order);

  return (
    <section className="bg-[#F8F9FA] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          {data?.heading}
        </h2>
        {data?.subheading && (
          <p className="mt-4 text-[#6C757D] max-w-2xl mx-auto text-sm sm:text-base">
            {data.subheading}
          </p>
        )}

        <div
          className="
            mt-12 grid gap-10 justify-center
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
          "
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center max-w-sm mx-auto"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007BFF] text-white font-semibold text-lg shadow-md">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[#6C757D] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
