// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function VisionSection({ data }) {
//   if (!data || !Array.isArray(data.content_items)) return null;

//   // Default active tab (Mission / Vision / Values etc.)
//   const [activeTab, setActiveTab] = useState(
//     data.primary_button_text || data.content_items[0]?.label
//   );

//   const activeContent = data.content_items.find(
//     (item) => item.label === activeTab
//   );

//   return (
//     <section className="relative w-full py-16 overflow-hidden bg-[#f9fcff]">
//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Top Section Type as H2 */}
//         {data.section_type && (
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold text-center text-gray-900"
//           >
//             {data.section_type.replace(/_/g, " ")}{" "}
//             {/* optional: format underscores */}
//           </motion.h2>
//         )}

//         {/* Heading */}
//         {data.heading && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto"
//           >
//             {data.heading}
//           </motion.p>
//         )}

//         {/* Tabs */}
//         <div className="flex justify-center mt-8 space-x-4">
//           {data.content_items.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.label)}
//               className={`px-4 py-2 rounded-lg font-medium shadow transition ${
//                 activeTab === item.label
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         {activeContent && (
//           <motion.div
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"
//             key={activeContent.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Left Content */}
//             <div className="flex-1">
//               {activeContent.label && (
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                   {activeContent.label}
//                 </h3>
//               )}
//               {activeContent.description && (
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                   {activeContent.description}
//                 </p>
//               )}
//             </div>

//             {/* Right Image */}
//             {activeContent.image && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 className="bg-transparent overflow-hidden w-full flex justify-center"
//               >
//                 <motion.img
//                   src={activeContent.image}
//                   alt={activeContent.label || "Vision"}
//                   className="w-full max-w-md rounded-2xl shadow-lg object-contain bg-white"
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VisionSection({ data }) {
  if (!data || !Array.isArray(data.content_items)) return null;

  // Default active tab → first content item
  const [activeTab, setActiveTab] = useState(data.content_items[0]?.label);

  const activeContent = data.content_items.find(
    (item) => item.label === activeTab
  );

  return (
    <section className="relative w-full py-11 overflow-hidden bg-[#f9fcff]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section Type as H2 */}
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
            <div className="flex-1 ml-0 lg:ml-40">
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

            {/* Right Image with Fixed Size */}
            {/* {activeContent.image && (
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-transparent p-8 mt-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={activeContent.image}
                  alt={activeContent.label || "Vision"}
                  className="bg-transparent  overflow-hidden w-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 6, // slower loop
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )} */}
            {/* Right Image with Fixed Size */}
            {activeContent.image && (
              <motion.div
                className="flex justify-center items-center bg-transparent p-9 mt-2 h-[400px]" // fixed height, flex for centering
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={activeContent.image}
                  alt={activeContent.label || "Vision"}
                  className="w-full h-full object-cover bg-transparent overflow-hidden rounded-[10px] lg:m-[58px]" // rounded + desktop margin
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 6, // slower loop
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
