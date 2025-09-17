import WhyChooseUsSlider from "./WhyChooseUsSlider";
import { CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";

const iconMap = [CheckCircle, TrendingUp, ShieldCheck];

const WhyChooseUs = ({ data }) => {
  if (!data) return null;

  return (
    <section
      className="relative w-full py-16 sm:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #F8F9FA, #E9ECEF)",
      }}
    >
      {/* subtle noise/texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
        <div className="space-y-8 text-center lg:text-left flex flex-col justify-center animate-fade-in-up">
          {data.super_heading && (
            <h2
              className="font-semibold text-xs sm:text-sm uppercase tracking-widest relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-1/2 after:h-0.5 after:transition-all after:duration-500 hover:after:w-full"
              style={{ color: "#155dfc" }}
            >
              {data.super_heading}
            </h2>
          )}

          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
            style={{ color: "#155dfc" }}
          >
            {data.heading.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-500 hover:-translate-y-1"
              >
                {word}&nbsp;
              </span>
            ))}
          </h3>

          {data.subheading && (
            <p
              className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed italic"
              style={{ color: "#6C757D" }}
            >
              {data.subheading}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {data.content_items?.map((item, idx) => {
              const IconComponent = iconMap[idx % iconMap.length];
              return (
                <div
                  key={idx}
                  className="rounded-xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02] duration-300 flex flex-col gap-4 group animate-fade-in-up"
                  style={{
                    backgroundColor: "#F8F9FA",
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{
                        background: "linear-gradient(135deg, #E0F0FF, #F8F9FA)",
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: "#155dfc" }}
                      />
                    </div>
                    <h4
                      className="font-semibold text-lg transition-colors duration-300"
                      style={{ color: "#343A40" }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#6C757D" }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full flex items-center justify-center animate-fade-in">
          <WhyChooseUsSlider contentItems={data.content_items} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
