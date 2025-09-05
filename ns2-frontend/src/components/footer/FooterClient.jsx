"use client";

import Image from "next/image";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

function getImageUrl(url) {
  if (!url) return null;
  return url.startsWith("http") ? url : `${API_BASE_URL}${url}`;
}

export default function FooterClient({ data }) {
  if (!data) return null;

  const { sections = [], company = {}, social_links = [] } = data;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Doodle elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner doodle */}
        <div className="absolute top-10 left-10 opacity-50">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="text-white"
          >
            <circle cx="20" cy="20" r="3" fill="currentColor" />
            <circle cx="40" cy="20" r="3" fill="currentColor" />
            <circle cx="60" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="40" r="3" fill="currentColor" />
            <circle cx="40" cy="40" r="3" fill="currentColor" />
            <circle cx="60" cy="40" r="3" fill="currentColor" />
            <circle cx="20" cy="60" r="3" fill="currentColor" />
            <circle cx="40" cy="60" r="3" fill="currentColor" />
            <circle cx="60" cy="60" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom right corner doodle */}
        <div className="absolute bottom-10 right-10 opacity-50">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="text-white"
          >
            <path
              d="M10,50 Q30,30 50,50 T90,50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
            />
            <circle cx="10" cy="50" r="4" fill="currentColor" />
            <circle cx="90" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Center left squiggle */}
        <div className="absolute top-1/2 left-5 opacity-10">
          <svg
            width="60"
            height="120"
            viewBox="0 0 60 120"
            className="text-white"
          >
            <path
              d="M30,10 C40,30 20,50 30,70 C40,90 20,110 30,110"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Center right circles */}
        <div className="absolute top-1/3 right-8 opacity-5">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="text-white"
          >
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="20"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="10"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10">
        {/* Main footer content - two column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Left column - Company info */}
          <div className="md:w-2/5">
            {company?.logo && (
              <div className="inline-flex items-center justify-center bg-white/95 dark:bg-black/80 rounded-xl p-3 shadow-lg mb-6 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={getImageUrl(company.logo)}
                  alt={company.name || "Company Logo"}
                  width={180}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
            )}

            <h3 className="font-heading text-xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {company?.name}
            </h3>

            {company?.tagline && (
              <p className="text-gray-400 mb-6 leading-relaxed">
                {company.tagline}
              </p>
            )}

            {/* Contact information */}
            <div className="space-y-3">
              {company?.email && (
                <div className="flex items-start group">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 transform group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {company.email}
                  </a>
                </div>
              )}

              {company?.phone && (
                <div className="flex items-start group">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 transform group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <a
                    href={`tel:${company.phone}`}
                    className="hover:text-blue-400 transition-colors group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {company.phone}
                  </a>
                </div>
              )}
            </div>

            {/* Social links */}
            {social_links?.length > 0 && (
              <div className="flex gap-4 mt-6">
                {social_links.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-cyan-500 p-2.5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative"
                    aria-label={social.platform || `social-${idx}`}
                  >
                    {social.icon ? (
                      <Image
                        src={getImageUrl(social.icon)}
                        alt={social.platform || "Social Link"}
                        width={20}
                        height={20}
                        className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all"
                        unoptimized
                      />
                    ) : (
                      <span className="text-sm">{social.platform}</span>
                    )}

                    {/* Subtle glow effect on hover */}
                    <span className="absolute inset-0 rounded-lg bg-blue-500/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 duration-1000"></span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right column - Navigation links */}
          <div className="md:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections
                .slice()
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((section, idx) => (
                  <div key={idx} className="w-full">
                    <h4 className="font-heading font-semibold text-white mb-4 text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {(section.items || [])
                        .slice()
                        .sort((a, b) => (a.order || 0) - (b.order || 0))
                        .map((item, i) => (
                          <li key={i} className="group">
                            <Link
                              href={item.url || "#"}
                              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-start"
                            >
                              <svg
                                className="w-4 h-4 text-blue-400 mr-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                ></path>
                              </svg>
                              <span className="group-hover:translate-x-1 transform transition-transform inline-block">
                                {item.text}
                              </span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>{company?.copyright_text}</p>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>{company?.credits_text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
