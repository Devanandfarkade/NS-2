// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// // dynamic colors – reused, cycle automatically
// const colors = [
//   { bg: "bg-green-600", text: "text-green-600", lightBg: "bg-green-100" },
//   { bg: "bg-blue-600", text: "text-blue-600", lightBg: "bg-blue-100" },
//   { bg: "bg-purple-600", text: "text-purple-600", lightBg: "bg-purple-100" },
//   { bg: "bg-red-600", text: "text-red-600", lightBg: "bg-red-100" },
//   { bg: "bg-yellow-600", text: "text-yellow-600", lightBg: "bg-yellow-100" },
// ];

// export default function WhatYouWillLearnClient({ data }) {
//   if (
//     !data ||
//     !Array.isArray(data.content_items) ||
//     data.content_items.length === 0
//   ) {
//     return null;
//   }

//   // Default tab = first content item
//   const [activeTab, setActiveTab] = useState(
//     data.content_items[0]?.primary_button_text
//   );

//   const activeIndex = data.content_items.findIndex(
//     (item) => item.primary_button_text === activeTab
//   );
//   const activeItem = data.content_items[activeIndex];
//   const activeColor = colors[activeIndex % colors.length];

//   return (
//     <section className="relative w-full py-16 bg-[linear-gradient(135deg,#F8FAFC,#E2E8F0)]">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Super Heading */}
//         {data.super_heading && (
//           <div className="flex justify-center">
//             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-semibold shadow">
//               <Star size={16} className="fill-current text-yellow-400" />
//               {data.super_heading}
//             </span>
//           </div>
//         )}

//         {/* Heading */}
//         {data.heading && (
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-4">
//             {data.heading}
//           </h2>
//         )}

//         {/* Highlighted Heading */}
//         {data.highlighted_heading && (
//           <p className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto">
//             {data.highlighted_heading}
//           </p>
//         )}

//         {/* Dynamic Tabs from backend */}
//         <div className="flex flex-wrap justify-center mt-8 gap-2">
//           {data.content_items.map((item, index) => {
//             const color = colors[index % colors.length];
//             const isActive = activeTab === item.primary_button_text;

//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.primary_button_text)}
//                 className={`px-5 py-2 rounded-lg font-medium shadow transition text-sm sm:text-base ${
//                   isActive
//                     ? `${color.bg} text-white`
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {item.primary_button_text}
//               </button>
//             );
//           })}
//         </div>

//         {/* Active Tab Content */}
//         {activeItem && (
//           <motion.div
//             key={activeItem.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mt-10"
//           >
//             <div className="p-6 bg-white rounded-xl shadow-md">
//               <h4 className="text-xl font-semibold text-gray-900 mb-2">
//                 {activeItem.title}
//               </h4>
//               {activeItem.description && (
//                 <p className="text-gray-600">{activeItem.description}</p>
//               )}
//               {activeItem.tags && (
//                 <div className="mt-3">
//                   <span
//                     className={`inline-block px-3 py-1 text-sm rounded-full ${activeColor.lightBg} ${activeColor.text}`}
//                   >
//                     {activeItem.tags}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const colors = [
  { bg: "bg-green-600", text: "text-green-600", lightBg: "bg-green-100" },
  { bg: "bg-blue-600", text: "text-blue-600", lightBg: "bg-blue-100" },
  { bg: "bg-purple-600", text: "text-purple-600", lightBg: "bg-purple-100" },
  { bg: "bg-red-600", text: "text-red-600", lightBg: "bg-red-100" },
  { bg: "bg-yellow-600", text: "text-yellow-600", lightBg: "bg-yellow-100" },
];

export default function WhatYouWillLearnClient({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  // default tab = first section
  const [activeTab, setActiveTab] = useState(data[0].subheading);

  const activeIndex = data.findIndex((item) => item.subheading === activeTab);
  const activeSection = data[activeIndex];
  const activeColor = colors[activeIndex % colors.length];

  return (
    <section className="relative w-full py-16 bg-[linear-gradient(135deg,#F8FAFC,#E2E8F0)]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Super Heading */}
        {activeSection.super_heading && (
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-semibold shadow">
              <Star size={16} className="fill-current text-yellow-400" />
              {activeSection.super_heading}
            </span>
          </div>
        )}

        {/* Main Heading */}
        {activeSection.heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-4">
            {activeSection.heading}
          </h2>
        )}

        {/* Highlighted Heading */}
        {activeSection.highlighted_heading && (
          <p className="text-lg md:text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            {activeSection.highlighted_heading}
          </p>
        )}

        {/* Tabs (dynamic from backend) */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {data.map((section, index) => {
            const color = colors[index % colors.length];
            const isActive = activeTab === section.subheading;

            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.subheading)}
                className={`px-5 py-2 rounded-lg font-medium shadow transition text-sm sm:text-base ${
                  isActive
                    ? `${color.bg} text-white`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.subheading}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        {activeSection?.content_items?.length > 0 && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto"
          >
            {activeSection.content_items.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 bg-[linear-gradient(135deg,#E2E8F0,#F8FAFC)] rounded-xl  mt-1.5 mb-1.5 transitionrounded-xl shadow-md hover:shadow-lg transition"
                // className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-[linear-gradient(135deg,#FFFFFF,#F8FAFC)] rounded-xl shadow-md hover:shadow-lg transition"
              >
                {item.label && (
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${activeColor.lightBg} ${activeColor.text} mb-2`}
                  >
                    {item.label}
                  </span>
                )}
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
