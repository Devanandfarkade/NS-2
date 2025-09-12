import UpcomingBatchesClient from "@/components/trainingStudent/UpcomingBatchesClient";

export default function UpcomingBatchesServer({ data }) {
  const sections = Array.isArray(data)
    ? data.filter((section) => section.section_type === "UPCOMING_BATCHES")
    : [];

  if (!sections || sections.length === 0) return null;

  return <UpcomingBatchesClient data={sections} />;
}
