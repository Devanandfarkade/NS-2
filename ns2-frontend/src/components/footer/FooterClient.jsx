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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Main footer content - two column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Left column - Company info */}
          <div className="md:w-2/5">
            {company?.logo && (
              <div className="inline-flex items-center justify-center bg-white/95 dark:bg-black/80 rounded-xl p-3 shadow-lg mb-6">
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

            <h3 className="font-heading text-xl font-bold text-white mb-3">
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
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5"
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
                    className="hover:text-blue-400 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              )}

              {company?.phone && (
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5"
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
                    className="hover:text-blue-400 transition-colors"
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
                    className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    aria-label={social.platform || `social-${idx}`}
                  >
                    {social.icon ? (
                      <Image
                        src={getImageUrl(social.icon)}
                        alt={social.platform || "Social Link"}
                        width={20}
                        height={20}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-sm">{social.platform}</span>
                    )}
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
                    <h4 className="font-heading font-semibold text-white mb-4 text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {(section.items || [])
                        .slice()
                        .sort((a, b) => (a.order || 0) - (b.order || 0))
                        .map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.url || "#"}
                              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-start"
                            >
                              <svg
                                className="w-4 h-4 text-blue-400 mr-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
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
                              {item.text}
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
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>{company?.copyright_text}</p>
          </div>

          <div className="text-sm text-gray-400">
            <p>{company?.credits_text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
