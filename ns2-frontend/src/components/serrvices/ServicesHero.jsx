// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export default function ServicesHero({ data }) {
//   if (!data || !Array.isArray(data)) return null;

//   const bannerData = data.find(
//     (section) => section.section_type === "BANNER" && section.is_active
//   );
//   if (!bannerData) return null;

//   const statBarItems = bannerData.content_items.filter(
//     (item) => item.category === "STAT_BAR"
//   );

//   const imageUrl = bannerData?.primary_image
//     ? `${API_BASE_URL}${bannerData.primary_image}`
//     : "/images/fallback-hero.jpg";

//   return (
//     <section
//       className="relative overflow-hidden"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='1150' preserveAspectRatio='none' viewBox='0 0 1440 700'%3E%3Cpath d='M0,200 C480,450 960,50 1440,300 L1440,700 L0,700 Z' fill='rgba(121,186,255,0.25)'/%3E%3C/svg%3E")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Content Wrapper */}
//       <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex-1 text-center md:text-left md:ml-[120px]"
//           >
//             <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
//               {bannerData.super_heading}
//             </span>

//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight"
//             >
//               {bannerData.heading}{" "}
//               <span className="text-blue-600">
//                 {bannerData.highlighted_heading_text}
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0"
//             >
//               {bannerData.subheading}
//             </motion.p>

//             {/* Buttons */}
//             <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
//               {bannerData.primary_button_text && (
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
//                 >
//                   {bannerData.primary_button_text}
//                 </motion.button>
//               )}
//               {bannerData.secondary_button_text && (
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold shadow hover:bg-blue-50 transition-all duration-300"
//                 >
//                   {bannerData.secondary_button_text}
//                 </motion.button>
//               )}
//             </div>

//             {/* Stats */}
//             {statBarItems.length > 0 && (
//               <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {statBarItems.map((item, index) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600">{item.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex-1 flex justify-center relative w-full"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="relative w-full max-w-sm h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src={imageUrl}
//                 alt="Banner"
//                 fill
//                 priority
//                 className="object-cover rounded-2xl"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ServicesHero({ data }) {
  // ✅ Ensure data structure is correct
  if (!data || typeof data !== "object") return null;

  // API returns an object with sections, not an array anymore when using slug
  const sections = Array.isArray(data) ? data : data.sections || [];

  const bannerData = sections.find(
    (section) => section.section_type === "BANNER" && section.is_active
  );
  if (!bannerData) return null;

  const statBarItems = bannerData.content_items?.filter(
    (item) => item.category === "STAT_BAR"
  ) || [];

  const imageUrl = bannerData?.primary_image
    ? `${API_BASE_URL}${bannerData.primary_image}`
    : "/images/fallback-hero.jpg";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='1150' preserveAspectRatio='none' viewBox='0 0 1440 700'%3E%3Cpath d='M0,200 C480,450 960,50 1440,300 L1440,700 L0,700 Z' fill='rgba(121,186,255,0.25)'/%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Wrapper */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left md:ml-[120px]"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {bannerData.super_heading}
            </span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight"
            >
              {bannerData.heading}{" "}
              <span className="text-blue-600">
                {bannerData.highlighted_heading_text}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0"
            >
              {bannerData.subheading}
            </motion.p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              {bannerData.primary_button_text && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  {bannerData.primary_button_text}
                </motion.button>
              )}
              {bannerData.secondary_button_text && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold shadow hover:bg-blue-50 transition-all duration-300"
                >
                  {bannerData.secondary_button_text}
                </motion.button>
              )}
            </div>

            {/* Stats */}
            {statBarItems.length > 0 && (
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {statBarItems.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center relative w-full"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={imageUrl}
                alt="Banner"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
