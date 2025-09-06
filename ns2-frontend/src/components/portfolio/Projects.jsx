"use client";

import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export function Projects({ data }) {
  if (!data) {
    return (
      <section className="py-20 bg-blue-50 text-center">
        <p>No portfolio data available.</p>
      </section>
    );
  }

  const { heading, subheading, content_items } = data;

  const [animate, setAnimate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Projects");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const filterLabels = Array.from(
    new Set(content_items.map((item) => item.label).filter(Boolean))
  );

  const allFilters = ["All Projects", ...filterLabels];

  const filteredItems =
    selectedFilter === "All Projects"
      ? content_items
      : content_items.filter((item) => item.label === selectedFilter);

  return (
    <section className="relative py-20 px-6 md:px-20 bg-blue-50 overflow-hidden">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"%2390cdf4\"/></svg>')",
        }}
      />

      {/* Section Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">{heading}</h2>
        <p className="mt-4 text-base font-light text-gray-600 max-w-2xl mx-auto">
          {subheading}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="relative z-10 flex justify-center mb-10 flex-wrap gap-3">
        {allFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              selectedFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-700 hover:bg-blue-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems
          .filter((item) => item.is_active)
          .map(
            (
              {
                order,
                label,
                title,
                description,
                answer,
                icon,
                primary_button_text,
                primary_button_url,
                secondary_button_url,
              },
              index
            ) => {
              const imageUrl =
                icon?.startsWith("http") || API_BASE_URL === ""
                  ? icon
                  : `${API_BASE_URL}${icon}`;

              return (
                <div
                  key={order}
                  className={`group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ${
                    animate ? "animate-fade-slide-up" : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    {label?.toLowerCase() === "featured" && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    <img
                      src={
                        imageUrl && !imageUrl.includes("null")
                          ? imageUrl
                          : "/media/icons/default-image.webp"
                      }
                      alt={`${title || "Project"} image`}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-1">
                      {description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                      {answer
                        ?.split(",")
                        .map((tech) => tech.trim())
                        .map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center mt-auto">
                      {primary_button_url ? (
                        <a
                          href={primary_button_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
                        >
                          {primary_button_text || "Live Demo"}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="bg-gray-400 text-white text-sm px-4 py-2 rounded-md cursor-not-allowed"
                        >
                          {primary_button_text || "Live Demo"}
                        </button>
                      )}

                      {secondary_button_url && (
                        <a
                          href={secondary_button_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-70 hover:opacity-100 transition"
                          aria-label="GitHub Repository"
                        >
                          <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub icon"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide-up {
          animation-name: fadeSlideUp;
          animation-duration: 700ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
