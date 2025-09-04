"use client";

export const TeamSection = ({ data = {} }) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const members = data.content_items || [];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
          {data.super_heading}{" "}
          <span className="text-blue-600">{data.heading}</span>
        </h2>

        {/* Subheading */}
        {data.subheading && (
          <p className="mt-4 text-gray-500 font-opensans text-base md:text-lg max-w-2xl mx-auto">
            {data.subheading}
          </p>
        )}

        {/* Team Members */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              {/* Image */}
              <div className="bg-blue-500 h-40 w-40 rounded-2xl shadow-lg mb-6 flex items-center justify-center overflow-hidden">
                {member.icon ? (
                  <img
                    src={`${API_BASE_URL}${member.icon}`}
                    alt={member.name}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <span className="text-white font-bold text-xl">
                    {member.name?.split(" ")[0]}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900 font-poppins">
                {member.label}
              </h3>

              {/* Role */}
              <p className="text-blue-600 font-semibold mt-1">
                {member.title}
              </p>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 font-opensans">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
