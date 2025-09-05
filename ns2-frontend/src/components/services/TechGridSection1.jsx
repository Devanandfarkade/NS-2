"use client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export default function TechGridSection1({ data }) {
  if (!data || !Array.isArray(data.content_items)) return null;

  const {
    heading,
    highlighted_heading_text,
    content_items: items,
  } = data;

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12">
      {/* Background Gradient & Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white z-0" />

      {/* Decorative Blurred Shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl z-0" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-800">{heading}</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            {highlighted_heading_text}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items
            .filter((item) => item.is_active)
            .map((item) => {
              const tags = item.tags
                ? item.tags.split(",").map((t) => t.trim())
                : [];

              const iconUrl = item.icon
                ? `${API_BASE_URL}${item.icon}`
                : null;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  {/* Icon */}
                  <div className="mb-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden">
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={item.title}
                        className="object-contain w-6 h-6"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Icon</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
