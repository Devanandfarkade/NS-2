"use client";

import { motion } from "framer-motion";

export default function UpcomingBatchesClient({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <section
      id="upcoming_batches"
      className="relative w-full py-12 bg-[linear-gradient(135deg,#F8FAFC,#E2E8F0)] scroll-mt-19 "
    >
      <div className="container mx-auto px-6 lg:px-12">
        {data.map((section) => (
          <div key={section.id} className="mb-12">
            {section?.heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                {section.heading}
              </h2>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white rounded-2xl shadow-lg w-full md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto"
            >
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                        Program
                      </th>
                      <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                        Start Date
                      </th>
                      <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                        Application Deadline
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.content_items?.map((item, idx) => {
                      const isLast = idx === section.content_items.length - 1;
                      return (
                        <tr
                          key={item.id}
                          className="border-t hover:bg-gray-50 transition"
                        >
                          <td
                            className={`px-6 py-4 text-gray-900 font-medium ${
                              isLast ? "rounded-bl-xl" : ""
                            }`}
                          >
                            {item.title}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {item.description}
                          </td>
                          <td
                            className={`px-6 py-4 text-gray-600 ${
                              isLast ? "rounded-br-xl" : ""
                            }`}
                          >
                            {item.tags}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="block md:hidden divide-y">
                {section.content_items?.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 flex flex-col gap-2 hover:bg-gray-50 transition"
                  >
                    <p className="text-gray-900 font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Start Date: </span>
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">
                        Application Deadline:{" "}
                      </span>
                      {item.tags}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
