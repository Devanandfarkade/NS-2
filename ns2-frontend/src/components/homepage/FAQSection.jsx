import FAQAccordion from "./FAQAccordion";

export default function FAQSection({ data }) {
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
    </section>
  );
}
