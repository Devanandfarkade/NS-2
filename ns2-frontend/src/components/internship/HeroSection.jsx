import HeroFloatingImages from "./HeroFloatingImages";

export default function HeroSection({ data }) {
  const heading = data?.heading ?? "Transform Your Into Reality";
  const highlighted = data?.highlighted_heading ?? "Digital Vision";
  const subheading =
    data?.subheading ??
    "Discover innovative solutions that drive growth and enhance user experiences.";
  const primaryBtn = data?.primary_button_text ?? "Get Started Today";
  const secondaryBtn = data?.secondary_button_text ?? "Learn More";

  // filter only active items
  const contentItems = (data?.content_items ?? []).filter(
    (item) => item.is_active
  );

  // fallback icons/colors
  const fallbackIcons = ["⚡", "🌱", "❤️"];
  const fallbackColors = [
    "bg-indigo-100 text-indigo-600",
    "bg-emerald-100 text-emerald-600",
    "bg-red-100 text-red-600",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-0 md:pt-0 pb-16 md:pb-20">
      {/* Background gradient blobs */}
      <div className="absolute -left-32 -top-20 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-30 blur-3xl" />
      <div className="absolute -right-32 -bottom-28 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-100 to-transparent opacity-30 blur-2xl" />

      {/* Waves (kept as it is) */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* First wave */}
        <svg
          className="absolute bottom-0 w-full h-[85vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGradient1)"
            d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,213.3C672,235,768,245,864,229.3C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
          ></path>
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Second wave */}
        <svg
          className="absolute bottom-0 w-full h-[85vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGradient2)"
            d="M0,288L60,277.3C120,267,240,245,360,213.3C480,181,600,139,720,133.3C840,128,960,160,1080,181.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L0,320Z"
          ></path>
          <defs>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Left side: text */}
          <div className="w-full md:w-1/2">
            {/* Top icons row */}
            {contentItems.length > 0 && (
              <div className="mb-3 flex items-center gap-3">
                <div className="flex gap-2">
                  {contentItems.map((item, i) => {
                    const colorClass =
                      fallbackColors[i % fallbackColors.length];
                    return (
                      <div
                        key={item.id || i}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shadow ${colorClass}`}
                      >
                        {item.icon ? (
                          <img
                            src={item.icon}
                            alt={item.label || `icon-${i}`}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <span className="text-sm">
                            {fallbackIcons[i % fallbackIcons.length]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <span className="text-sm text-gray-500">
                  Internship • Growth • Vision
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
              {heading}{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                {highlighted}
              </span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl">{subheading}</p>

            <div className="mt-6 flex gap-4 items-center">
              {/* Primary Button */}
              <a
                href={data?.primary_button_url ?? "#"}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                {primaryBtn}
              </a>

              {/* Secondary Button with background */}
              <a
                href={data?.secondary_button_url ?? "#"}
                className="px-5 py-3 rounded-lg bg-sky-100 text-sky-700 font-medium hover:bg-sky-200 shadow-sm border border-sky-200"
              >
                {secondaryBtn}
              </a>
            </div>
          </div>

          {/* Right side: Floating images */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <HeroFloatingImages
              primaryImage={data?.primary_image}
              secondaryImage={data?.background_image}
              overlayTitle={data?.overlay_title}
              overlayDescription={data?.overlay_description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
