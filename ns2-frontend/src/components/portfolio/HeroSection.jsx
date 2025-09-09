"use client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const HeroSection = ({ data }) => {
  const contentItems = data.content_items || [];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-20 md:py-28 overflow-hidden">
      {/* Top wave background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-full h-24 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C161.07 66.31 0 120 0 120h1200V0s-278.26 52.09-480 62.71c-155.16 7.97-321.78-27.19-398.61-6.27z"
            className="fill-blue-100"
          ></path>
        </svg>
      </div>

      {/* Bottom wave background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-24 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C161.07 66.31 0 120 0 120h1200V0s-278.26 52.09-480 62.71c-155.16 7.97-321.78-27.19-398.61-6.27z"
            className="fill-blue-50"
          ></path>
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight font-poppins">
          {data.super_heading}{" "}
          <span className="text-blue-600">{data.heading}</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium inline-block border-b-2 border-blue-300 border-dashed px-2">
          {data.subheading}
        </p>

        {/* Overview */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 font-opensans">
          {data.overview_text}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          {data.primary_button_text && (
            <a
              href={data.primary_button_url || "#"}
              className="px-8 py-3 w-full sm:w-auto bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {data.primary_button_text}
            </a>
          )}
          <a
            href="#"
            className="px-8 py-3 w-full sm:w-auto bg-white text-blue-600 font-semibold rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.order}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 text-center transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4 h-12">
                {item.icon && (
                  <img
                    src={`${API_BASE_URL}${item.icon}`}
                    alt={`${item.title} icon`}
                    className="h-full object-contain"
                  />
                )}
              </div>
              <p className="text-5xl font-bold text-blue-600 font-poppins">
                {item.label}
              </p>
              <p className="mt-2 text-md text-gray-600 font-opensans">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
