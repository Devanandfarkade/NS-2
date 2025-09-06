// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Linkedin, Twitter, Mail } from "lucide-react";
// import { fetchAboutPage } from "@/lib/api";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export default function OurTeam() {
//   const [teamData, setTeamData] = useState(null);

//   useEffect(() => {
//     async function loadData() {
//       const res = await fetchAboutPage();
//       if (res) {
//         const section = res.find(
//           (item) => item.section_type === "OUR_TEAM" && item.is_active
//         );
//         setTeamData(section);
//       }
//     }
//     loadData();
//   }, []);

//   if (!teamData) return null;

//   return (
//     <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12">
//         {/* Super Heading */}
//         {teamData.super_heading && (
//           <motion.span
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block px-4 py-1 mb-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm"
//           >
//             {teamData.super_heading}
//           </motion.span>
//         )}

//         {/* Heading + Subheading */}
//         {teamData.heading && (
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-5xl font-bold text-center text-gray-900"
//           >
//             {teamData.heading}{" "}
//             {teamData.subheading && (
//               <span className="text-blue-600">{teamData.subheading}</span>
//             )}
//           </motion.h2>
//         )}

//         {/* Overview */}
//         {teamData.overview_text && (
//           <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
//             {teamData.overview_text}
//           </p>
//         )}

//         {/* Team Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
//           {teamData.content_items?.map((member, idx) => {
//             const imageUrl = member.image?.startsWith("http")
//               ? member.image
//               : `${API_BASE_URL}${member.image}`;

//             return (
//               <motion.div
//                 key={member.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
//               >
//                 {/* Gradient Top Banner */}
//                 <div className="relative h-32 w-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-5xl font-bold opacity-20">
//                   {member.title?.split(" ")[0] || "TEAM"}
//                 </div>

//                 {/* Profile Image */}
//                 <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
//                   <img
//                     src={imageUrl}
//                     alt={member.label}
//                     className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 {/* Card Content */}
//                 <div className="pt-20 pb-8 px-6 text-center">
//                   {/* Role Tag */}
//                   <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
//                     {member.title}
//                   </span>

//                   {/* Contact Button */}
//                   <span className="absolute top-4 right-4 bg-white rounded-full p-2 shadow cursor-pointer hover:bg-blue-100 transition">
//                     <Mail className="w-4 h-4 text-gray-600" />
//                   </span>

//                   {/* Name */}
//                   <h3 className="text-lg font-bold text-gray-900 mt-4">
//                     {member.label}
//                   </h3>
//                   <p className="text-sm text-blue-600 font-medium">
//                     {member.title}
//                   </p>

//                   {/* Description */}
//                   {member.description && (
//                     <p className="mt-3 text-gray-600 text-sm leading-relaxed">
//                       {member.description}
//                     </p>
//                   )}

//                   {/* Social Links */}
//                   <div className="flex justify-center gap-3 mt-4">
//                     {member.linkedin_url && (
//                       <a
//                         href={member.linkedin_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-white border rounded-full p-2 shadow hover:bg-blue-50 transition"
//                       >
//                         <Linkedin className="w-4 h-4 text-blue-600" />
//                       </a>
//                     )}
//                     {member.twitter_url && (
//                       <a
//                         href={member.twitter_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-white border rounded-full p-2 shadow hover:bg-blue-50 transition"
//                       >
//                         <Twitter className="w-4 h-4 text-sky-500" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function OurTeam() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/aboutus/fetch-about-page/`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const aboutData = await res.json();

        // Find the OUR_TEAM section
        const teamSection = aboutData.find(
          (section) => section.section_type === "OUR_TEAM"
        );

        setData(teamSection);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p>Loading team information...</p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements similar to VisionSection */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-indigo-300 rounded-full opacity-20"></div>

        {/* Decorative lines */}
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {data.content_items.map((member, idx) => {
              // Ensure correct image URL
              const imageUrl = member.image?.startsWith("http")
                ? member.image
                : `${API_BASE_URL}${member.image}`;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  {/* Banner strip */}
                  <div className="relative h-28 w-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                  {/* Profile Image in circle */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
                    <motion.img
                      src={imageUrl}
                      alt={member.label}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover group-hover:scale-105 transition duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="pt-16 pb-8 px-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.label}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">
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
