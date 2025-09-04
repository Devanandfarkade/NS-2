import WhyChooseUsSlider from "./WhyChooseUsSlider";
import { CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";

const iconMap = [CheckCircle, TrendingUp, ShieldCheck];

const WhyChooseUs = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-gray-50 mt-12 sm:mt-16 lg:mt-24 py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
          {data.super_heading && (
            <h2 className="text-blue-600 font-semibold text-sm sm:text-base relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-500 hover:after:w-full">
              {data.super_heading}
            </h2>
          )}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
            {data.heading.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-500 hover:translate-y-[-2px]"
              >
                {word}&nbsp;
              </span>
            ))}
          </h3>
          {data.subheading && (
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {data.subheading}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {data.content_items?.map((item, idx) => {
              const IconComponent = iconMap[idx % iconMap.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sliding Icon Section */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full flex items-center justify-center animate-fade-in">
          <WhyChooseUsSlider contentItems={data.content_items} />
        </div>
      </div>

      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-20 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-20 pointer-events-none animate-pulse-slow"></div>
    </section>
  );
};

export default WhyChooseUs;
