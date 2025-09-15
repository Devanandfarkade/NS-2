import KeyAchievementsClient from "./KeyAchievements.client";

export default function KeyAchievementsServer({ data }) {
  if (!data) return null;

  return (
    <section className="w-full py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {data.super_heading && (
          <p className="text-sm text-gray-500 uppercase tracking-wider font-sans">
            {data.super_heading}
          </p>
        )}

        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-heading">
          <span className="text-gray-900">Key </span>
          <span className="text-blue-600">Achievements</span>
        </h2>

        {data.heading && (
          <p className="mt-3 text-base md:text-lg text-gray-600 font-sans max-w-3xl mx-auto">
            {data.heading}
          </p>
        )}

        <KeyAchievementsClient items={data.content_items} />

        <hr className="mt-12 border-t-2 border-dashed border-gray-300" />
      </div>
    </section>
  );
}
