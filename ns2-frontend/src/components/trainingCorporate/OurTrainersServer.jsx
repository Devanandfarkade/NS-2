import OurTrainersClient from "@/components/trainingCorporate/OurTrainersClient";

export default function OurTrainersServer({ data }) {
  if (!data || !data.is_active) return null;

  return <OurTrainersClient data={data} />;
}
