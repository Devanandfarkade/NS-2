import { fetchTrainingPage } from "@/lib/api";
import TrainingProcessClient from "@/components/trainingCorporate/TrainingProcessClient";

export default async function TrainingProcessServer({ slug }) {
  const data = await fetchTrainingPage(slug);

  const processData = data.find(
    (section) => section.section_type === "TRAINING_PROCESS"
  );

  if (!processData) return null;

  return <TrainingProcessClient data={processData} />;
}
