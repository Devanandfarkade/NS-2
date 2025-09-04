import FAQAccordion from "./FAQAccordion";

export default function FAQSection({ data, cta }) {
  if (!data || !data?.content_items?.length) return null;

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          {data.heading}
        </h2>
        {data.subheading && (
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {data.subheading}
          </p>
        )}
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        <FAQAccordion items={data.content_items} />
      </div>

      {cta && (
        <div className="mt-12 max-w-2xl mx-auto bg-white dark:bg-neutral-800 shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {cta.heading}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {cta.subheading}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {cta.primary_button_text && (
              <a
                href={cta.primary_button_url || "#"}
                className="px-6 py-2 rounded-xl text-white bg-indigo-700 hover:bg-indigo-800 transition"
              >
                {cta.primary_button_text}
              </a>
            )}
            <a
              href="/schedule"
              className="px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
