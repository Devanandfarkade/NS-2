"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function KeyAchievementsClient({ items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {items.map((item, idx) => {
          const labelStr = String(item.label || "").trim();

          const numericMatch = labelStr.match(/^(\d+)([+%]*)$/);

          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-bold font-heading text-blue-600">
                {numericMatch ? (
                  <>
                    <CountUp
                      end={parseInt(numericMatch[1], 10)}
                      duration={1.8}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {numericMatch[2]}
                  </>
                ) : (
                  labelStr
                )}
              </div>

              <p className="mt-2 text-sm md:text-base text-gray-600 font-sans">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
