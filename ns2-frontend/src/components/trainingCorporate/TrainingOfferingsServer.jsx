import TrainingOfferingsClient from "@/components/trainingCorporate/TrainingOfferingsClient";

export default function TrainingOfferingsServer({ data }) {
  if (!data) return null;
  return <TrainingOfferingsClient data={data} />;
}
