"use client";

import Image from "next/image";

export default function AboutCorporateClient({ data }) {
  if (!data) return null;

  return (
    <section className="relative bg-white dark:bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 uppercase tracking-wide font-heading">
            {data.super_heading}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-heading">
            <span className="text-indigo-600">{data.heading}</span>
          </h2>
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 font-heading">
            {data.highlighted_heading}
          </h4>
          <p className="text-gray-600 mt-4 leading-relaxed font-body">
            {data.subheading}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.content_items?.map((item) => (
              <div key={item.id} className="flex items-start space-x-3">
                {item.icon && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon}`}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                )}
                <div>
                  <h5 className="font-semibold text-gray-900 font-heading">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-600 font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute -left-4 top-4 w-full h-[105%] bg-gray-100 rounded-[8px]"></div>

          <div className="relative w-full h-[360px] md:h-[480px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.primary_image}`}
              alt="Corporate Training"
              fill
              className="object-cover shadow-lg relative z-10"
              style={{ borderRadius: "8px" }}
            />

            <div
              className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 shadow-md z-20"
              style={{ borderRadius: "8px" }}
            >
              <h5 className="font-semibold text-gray-900 font-heading">
                {data.overlay_title}
              </h5>
              <p className="text-sm text-gray-700 font-body">
                {data.overlay_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
